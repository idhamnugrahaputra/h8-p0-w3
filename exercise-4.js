// exercise 4; week3; selasa;
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

function dataHandling2 (dataPerson){
  input.splice(1,1,'Roman Alamsyah elsharawy');
  input.splice(2,1,'Provinsi Bandar Lampung');
  input.splice(4,1,'Pria','SMA Internasional Metro');
  var x = input[3].split('/');
  let newX = x.slice(0) // copy new ARRAY
  let xx = x.slice(0)
  let bulan = x[1];
  var sort = newX.sort((a,b) => b-a)

  switch (bulan) {
    case '01':
      x[1] = 'januari';
      break;
    case '02':
      x[1] = 'februari';
      break;
    case '03':
      x[1] = 'maret';
      break;
    case '04':
      x[1] = 'april';
      break;
    case '05':
      x[1] = 'mei';
      break;
    case '06':
      x[1] = 'juni';
      break;
    case '07':
      x[1] = 'juli';
      break;
    case '08':
      x[1] = 'agustus';
      break;
    case '09':
      x[1] = 'september';
      break;
    case '10':
      x[1] = 'october';
      break;
    case '11':
      x[1] = 'november';
      break;
    case '12':
      x[1] = 'desember';
      break;
  }
  console.log(input);
  console.log(x[1]);
  console.log(sort);
  console.log(xx.join('-'));
  let name = input[1].split('');
  console.log(name.slice(0,14).join(''));
 }
dataHandling2(input);
