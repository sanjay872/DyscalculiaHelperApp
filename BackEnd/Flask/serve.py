import os
from flask import Flask, request, jsonify,Response
from keyword_spotting_service import Keyword_Spotting_Service
from flask_cors import CORS
from pydub import AudioSegment
import random
import io
import numpy as np
from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
import matplotlib.pyplot as plt 
from flask_sqlalchemy import SQLAlchemy; #for database connection
from flask_marshmallow import Marshmallow;
from sqlalchemy import text

# instantiate flask app
app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI']='mysql://sanjay:sanjay@localhost/DyscalculiaHelper' #DB URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False #to avoid warning


db=SQLAlchemy(app) 
ma=Marshmallow(app)

class TestResultsSchema(ma.Schema):
    class Meta:
        fields=("level","score")
iq_schema=TestResultsSchema() 

def detect_leading_silence(sound, silence_threshold=-50.0, chunk_size=10):
    '''
    sound is a pydub.AudioSegment
    silence_threshold in dB
    chunk_size in ms

    iterate over chunks until you find the first one with sound
    '''
    trim_ms = 0 # ms

    assert chunk_size > 0 # to avoid infinite loop
    while sound[trim_ms:trim_ms+chunk_size].dBFS < silence_threshold and trim_ms < len(sound):
        trim_ms += chunk_size

    return trim_ms
@app.route("/predict", methods=["POST"])
def predict():
	# get file from POST request and save it
	audio_file = request.files["file"]
	file_name = str(random.randint(0, 100000))+".wav"
	audio_file.save(file_name)

	# sound=AudioSegment.from_file(file_name,format="wav")
	# start_trim = detect_leading_silence(sound)
	# end_trim = detect_leading_silence(sound.reverse())
	# duration = len(sound)    
	# trimmed_sound = sound[start_trim:duration-end_trim]
	# os.remove(file_name)
	# trimmed_sound.export(out_f = file_name,  
    #                    format = "wav")
	# instantiate keyword spotting service singleton and get prediction
	kss = Keyword_Spotting_Service()
	predicted_keyword = kss.predict(file_name)

	# we don't need the audio file any more - let's delete it!
	os.remove(file_name)

	# send back result as a json file
	result = {"keyword": predicted_keyword}
	return jsonify(result)

@app.route("/graph", methods=["POST"])
def createGraph():
	data=request.json
	user_id=data["userid"]
	section=data["section"]
	data={"easy":0,"medium":0,"hard":0}
	x_label=['easy','medium','hard']
	y_label=[]
	sql = text('select score,level from test_results where user_id="'+user_id+'" and section="'+section+'";')
	result = db.engine.execute(sql)
	for row in result:	
		data[row[1]]=row[0]
	for i in range(3):
		y_label.append(data[x_label[i]])
	plt.switch_backend('agg')
	fig = plt.figure(figsize = (10, 5))

	levels=[1,2,3]

	# plotting a bar chart 
	plt.bar(levels,y_label, tick_label = x_label, 
         width = 0.4, color = ['red', 'green','blue']) 
  
	# naming the x-axis 
	plt.xlabel('Difficulty Level') 

	# naming the y-axis 
	plt.ylabel('Score') 

	# plot title 
	plt.title('Result') 
  
	canvas = FigureCanvas(fig)
	output = io.BytesIO()
	FigureCanvas(fig).print_png(output)
	return Response(output.getvalue(), mimetype='image/png')

if __name__ == "__main__":
    app.run(debug=False)