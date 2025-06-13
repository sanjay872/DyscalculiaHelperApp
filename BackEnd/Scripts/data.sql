-- Step 1: Create database if not exists
CREATE DATABASE IF NOT EXISTS DyscalculiaHelper;

-- Step 2: Use the database
USE DyscalculiaHelper;

-- Step 3: Insert sample data
INSERT INTO add_questions (id, level, option1, option2, option3, option4, question, questionimg, solution)
VALUES 
-- Easy Level
(40001, 'easy', '2', '3', '5', '4', '2 + 2', 'What is 2 plus 2?', '4'),
(40002, 'easy', '6', '5', '4', '3', '1 + 3', 'Simple addition of 1 and 3', '4'),
(40003, 'easy', '7', '6', '5', '8', '4 + 4', 'Double 4 is?', '8'),

-- Medium Level
(40004, 'medium', '11', '12', '10', '9', '6 + 5', 'Add 6 and 5 together.', '11'),
(40005, 'medium', '14', '15', '16', '13', '7 + 7', 'What is 7 added to 7?', '14'),
(40006, 'medium', '17', '16', '15', '14', '9 + 8', 'Add 9 and 8', '17'),

-- Hard Level
(40007, 'hard', '23', '25', '24', '26', '12 + 13', 'Solve 12 plus 13', '25'),
(40008, 'hard', '33', '34', '35', '36', '17 + 17', 'What is 17 added to itself?', '34'),
(40009, 'hard', '42', '40', '41', '39', '22 + 19', 'Add 22 and 19', '41');


-- Sample subtraction questions
INSERT INTO sub_questions (id, level, option1, option2, option3, option4, question, questionimg, solution)
VALUES 
(10001, 'easy', '1', '2', '3', '4', '5 - 3', 'Subtract 3 from 5.', '2'),
(10002, 'easy', '2', '1', '0', '3', '4 - 2', 'What is 4 minus 2?', '2'),
(10003, 'easy', '1', '2', '3', '0', '3 - 2', 'Take away 2 from 3.', '1'),
(10004, 'medium', '5', '6', '7', '8', '13 - 7', 'Subtract 7 from 13.', '6'),
(10005, 'medium', '8', '7', '6', '5', '15 - 8', 'What is 15 minus 8?', '7'),
(10006, 'medium', '10', '11', '12', '13', '20 - 9', 'Subtract 9 from 20.', '11'),
(10007, 'hard', '14', '13', '12', '11', '30 - 17', 'What is 30 minus 17?', '13'),
(10008, 'hard', '16', '15', '14', '13', '41 - 25', 'Subtract 25 from 41.', '16'),
(10009, 'hard', '20', '18', '19', '21', '50 - 31', 'Solve 50 minus 31.', '19');



-- Sample multiplication questions
INSERT INTO mul_questions (id, level, option1, option2, option3, option4, question, questionimg, solution)
VALUES 
(20001, 'easy', '2', '3', '4', '5', '2 × 2', 'Multiply 2 and 2.', '4'),
(20002, 'easy', '4', '6', '8', '10', '2 × 3', 'What is 2 times 3?', '6'),
(20003, 'easy', '6', '9', '8', '7', '3 × 2', 'Multiply 3 with 2.', '6'),
(20004, 'medium', '12', '15', '18', '20', '4 × 3', 'What is 4 multiplied by 3?', '12'),
(20005, 'medium', '25', '24', '21', '20', '5 × 5', 'Square of 5 is?', '25'),
(20006, 'medium', '36', '30', '32', '34', '6 × 6', 'Multiply 6 with 6.', '36'),
(20007, 'hard', '56', '54', '55', '53', '7 × 8', 'What is 7 times 8?', '56'),
(20008, 'hard', '81', '72', '80', '79', '9 × 9', 'Square of 9 is?', '81'),
(20009, 'hard', '96', '90', '88', '84', '12 × 8', 'Multiply 12 with 8.', '96');


-- Sample mixed operation questions
INSERT INTO mix_questions (id, level, option1, option2, option3, option4, question, questionimg, solution)
VALUES 
(30001, 'easy', '4', '5', '6', '7', '2 + 2', 'Add 2 and 2.', '4'),
(30002, 'easy', '3', '4', '2', '1', '5 - 2', 'Subtract 2 from 5.', '3'),
(30003, 'easy', '6', '8', '7', '9', '3 × 2', 'Multiply 3 with 2.', '6'),
(30004, 'medium', '10', '9', '8', '11', '6 + 3', 'Add 6 and 3.', '9'),
(30005, 'medium', '12', '10', '11', '9', '4 × 3', 'Multiply 4 by 3.', '12'),
(30006, 'medium', '6', '7', '8', '5', '14 - 8', 'Subtract 8 from 14.', '6'),
(30007, 'hard', '20', '21', '22', '23', '11 + 10', 'Add 11 and 10.', '21'),
(30008, 'hard', '72', '70', '68', '69', '9 × 8', 'Multiply 9 and 8.', '72'),
(30009, 'hard', '14', '15', '13', '16', '30 - 15', 'Subtract 15 from 30.', '15');

