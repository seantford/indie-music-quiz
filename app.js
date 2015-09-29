//Create Questions
var questions = [
    new Question("Which hyper-prolific psychedelic punk band hails from San Fransisco, California and is led by the energetic John Dwyer?", [ "Swans", "Thee Oh Sees" ], "Thee Oh Sees"),
    new Question("Panda Bear, Avey Tare, Deakin, and The Geologist make weird experimental music as what band?", ["TV On The Radio","Animal Collective"], "Animal Collective"),
    new Question("Which New York City trio makes hypnotic, loop-driven songs with hard-hitting drums, synthy guitars and guitarish synths?", ["Battles","Bright Eyes"], "Battles"),
    new Question("Stephen Malkmus is the singer, songwriter, and lead guitarist of which Stockton, California-born indie rock band?", ["Radiohead", "Pavement"], "Pavement"),
    new Question("Which band hails from Glen Rock, New Jersey, and delivers existentialist philosophy alongside powerful electric guitar arrangements?", ["Titus Andronicus","EMA"], "Titus Andronicus"),
    new Question("Radioheads Thom Yorke teamed up with Red Hot Chili Peppers bassist Flea to form which experimental rock band?", ["Atoms For Peace","Sigur Ros"], "Atoms For Peace"),
    new Question("Which noise-folk band was born out of the legendary Athens, Georgia music scene in the 1990s, only to go on a years-long hiatus after releasing their masterful second LP, In The Aeroplane Over The Sea?", ["Nirvana", "Neutral Milk Hotel"], "Neutral Milk Hotel"),
    new Question("Grand orchestral arrangements, experimental sounds, and interactive performances are the hallmark of which artist?", ["Dan Deacon","Father John Misty"], "Dan Deacon"),
    new Question("Now a hugely popular comedian, riot grrrl Carrie Brownstein once shredded guitars for which punk rock band?", ["Girls","Sleater-Kinney"], "Sleater-Kinney"),
    new Question("J Mascis' signature melancholy droll often barely peeks through massive walls of guitar fuzz in songs from which high-volume shoegaze band?", ["LCD Soundsystem","Dinosaur Jr."], "Dinosaur Jr.")
];

//Create Quiz
var quiz = new Quiz(questions);

//Display Quiz
QuizUI.displayNext();