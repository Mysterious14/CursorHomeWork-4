const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];

const themes = ['Диференційне рівняння', 'Теорія автоматів', 'Алгоритми і структури даних'];

const marks = [4, 5, 5, 3, 4, 5];

function coupleOfStudents(students) {
  const pair = [
    [students[0], students[2]],
    [students[1], students[3]],
    [students[4], students[5]],
  ];
  return pair;
}
const coupleArr = coupleOfStudents(students);
document.writeln('<b>Пари студентів:</b><br>');
coupleArr.map((el) => {
  document.writeln(`${el}<br>`);
});

function StudentsWithThemes(students, themes) {
  const getThemes = [
    [students[0] + ' i ' + students[2], themes[0]],
    [students[1] + ' i ' + students[3], themes[1]],
    [students[4] + ' i ' + students[5], themes[2]],
  ];

  return getThemes;
}

const StudentsThemes = StudentsWithThemes(students, themes);
document.writeln('<b>Студенти і пари:</b><br>');
StudentsThemes.map((el) => {
  document.writeln(`${el}<br>`);
});

function getMarks(students, marks) {
  const studentsWithMarks = [
    [students[0], marks[0]],
    [students[1], marks[1]],
    [students[2], marks[2]],
    [students[3], marks[3]],
    [students[4], marks[4]],
    [students[5], marks[5]],
  ];
  return studentsWithMarks;
}
const studentsMark = getMarks(students, marks);
document.writeln('<b>Студенти з оцінками:</b><br>');
studentsMark.map((el) => {
  document.writeln(`${el}<br>`);
});

function studentsAllInfo(StudentsThemes) {
  const studentsAllInfoArr = [
    [StudentsThemes[0], Math.floor(Math.random() * 5 + 1)],
    [StudentsThemes[1], Math.floor(Math.random() * 5 + 1)],
    [StudentsThemes[2], Math.floor(Math.random() * 5 + 1)],
  ];
  return studentsAllInfoArr;
}
document.writeln('<b>Пари студентів з темами і оцінками:</b><br>');
const coupleStudentsAllInfo = studentsAllInfo(StudentsThemes);
coupleStudentsAllInfo.map((el) => {
  document.writeln(`${el}<br>`);
});
