var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(data){

  data.splice(1,2,'Roman Alamsyah Elsharawy','Provinsi Bandar Lampung')
  data.splice(4,1,'Pria','SMA Internasional Metro')
  var fullDateMonthYear = data[3].split('/')
  var copyForSort = fullDateMonthYear.slice(0)
  var month = fullDateMonthYear[1]
  var sort = copyForSort.sort((a,b) => b-a)
  var join = fullDateMonthYear.join('-')

  switch (month) {
    case '01':
      month = 'januari';
      break;
    case '02':
      month = 'februari';
      break;
    case '03':
      month = 'maret';
      break;
    case '04':
      month = 'april';
      break;
    case '05':
      month = 'mei';
      break;
    case '06':
      month = 'juni';
      break;
    case '07':
      month = 'juli';
      break;
    case '08':
      month = 'agustus';
      break;
    case '09':
      month = 'september';
      break;
    case '10':
      month = 'october';
      break;
    case '11':
      month = 'november';
      break;
    case '12':
      month = 'desember';
      break;
  }

  console.log(data);
  console.log(month);
  console.log(sort);
  console.log(join);
  console.log(data[1].slice(0,15));
}
dataHandling2(input);
