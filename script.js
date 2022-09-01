const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];

const themes = ['Диференційне рівняння', 'Теорія автоматів', 'Алгоритми і структури даних'];

const marks = [4, 5, 5, 3, 4, 5];
const girls = [];
const boys = [];
const pairs = [];
function coupleOfStudents(students) {
  students.map((el)=>{
    el.lastIndexOf("а") === el.length-1 ? girls.push(el) : boys.push(el);
  })
  for (let i = 0; i < boys.length; i++) {
    pairs.push([boys[i], girls[i]]);
  }
  return pairs;
}
const coupleArr = coupleOfStudents(students);
document.writeln('<b>Пари студентів:</b><br>');
coupleArr.map((el) => {
  document.writeln(`${el}<br>`);
});

function StudentsWithThemes(boys, girls, themes) {
  const getThemes = [];
  for (let i = 0; i < boys.length; i++) {
    getThemes.push([boys[i] + " i " + girls[i], themes[i]]);
  }

  return getThemes;
}

const StudentsThemes = StudentsWithThemes(boys, girls, themes);
document.writeln('<b>Студенти і пари:</b><br>');
StudentsThemes.map((el) => {
  document.writeln(`${el}<br>`);
});

function getMarks(students, marks) {
  const studentsWithMarks = [];
  for(let i=0;i<students.length;i++){
    studentsWithMarks.push([students[i], marks[i]]);
  }
  return studentsWithMarks;
}
const studentsMark = getMarks(students, marks);
document.writeln('<b>Студенти з оцінками:</b><br>');
studentsMark.map((el) => {
  document.writeln(`${el}<br>`);
});

function studentsAllInfo(StudentsThemes) {
  const studentsAllInfoArr = [];
  for(let i=0;i<StudentsThemes.length;i++){
    studentsAllInfoArr.push([StudentsThemes[i], Math.floor(Math.random() * 5 + 1)])
  }

  return studentsAllInfoArr;
}
document.writeln('<b>Пари студентів з темами і оцінками:</b><br>');
const coupleStudentsAllInfo = studentsAllInfo(StudentsThemes);
coupleStudentsAllInfo.map((el) => {
  document.writeln(`${el}<br>`);
});
