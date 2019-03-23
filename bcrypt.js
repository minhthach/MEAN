// Thư viện mã hóa password

const bcrypt = require('bcrypt');

// bcrypt.hash('111111', 8) // Giá trị mã hóa và số vòng mã hóa (recommended 8)
// .then(hash => console.log(hash))
// .catch((err) => console.log(err))

var hash = '$2b$08$ypXWfXYV3F6rtIh.qyyYHOAeCuC/qfNtpF6k6GEBk8OqutSNyIvw6';
bcrypt.compare('1111111', hash)
.then(result => console.log(result))
.catch(err => console.log(err))