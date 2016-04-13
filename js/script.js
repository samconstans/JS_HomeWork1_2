function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

var x = prompt("x?", '');
var n = prompt("n?", '');

if (n <= 1) {
  alert('Степень ' + n +
    'не поддерживается, введите целую степень, большую 1'
  );
} else {
  alert( pow(x, n) );
}


var arr = fillArray();
var userName = prompt('Введите имя пользователя');

checkAccess(arr, userName);

function  fillArray() {
    var arr = [];
    for (var i = 0; i < 5; i++) {
        arr.push(prompt('Введите ' + (i+1) + '-е имя'));
    }
    return arr;
}

function checkAccess(arr, userName) {
    var rightName = false;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == userName) {          
        		break;
        } 
    }
    
    rightName = true;
        alert(userName + ', вы успешно вошли');
    if (!rightName) {
        alert('Указанного пользователя не существует, Лол!');
    }
}
