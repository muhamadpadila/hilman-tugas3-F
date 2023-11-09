import React from 'react';
import users from './users';

// TODO - 2
// Import variabel users dari file users.js


const UsersController = () => {
    async () => {
        console.log(await formatUser())
        console.log(await findByName())
        console.log(await filterByMajor)
    }
    return (
        <div>
            <h3>Cek hasilnya pada konsole</h3>
        </div>
    );
}

// TODO - 3
// Buatlah function formatUser yang menampilkan seluruh nama users
// Gunakan metode async await
// Gunakan metode map untuk format user
const formatUser = async (dataUsers) => {
    try {
      const formattedUsers = await Promise.all(dataUsers.map(async (user) => {

        const formattedName = user.name.toUpperCase();
        return formattedName;
      }));
  
      return formattedUsers;
    } catch (error) {
     
      console.error('Error:', error);
      throw error;
    }
  };
  
  formatUser(users)
    .then((formattedUsers) => {
      console.log('Formatted Users:', formattedUsers);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

// TODO - 4
// Buatlah function findByName yang mencari 1 user berdasarkan nama
// Gunakan metode async await
// Gunakan metode find untuk mencari user
const findByName = async (name) => {
    try {
      const user = await new Promise((resolve) => {
        
        const foundUser = users.find((user) => user.name === name);
        resolve(foundUser);
      });
  
      return user;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };
  
  const searchName = "Erik";
  findByName(searchName)
    .then((user) => {
      if (user) {
        console.log('User found:', user);
      } else {
        console.log('User not found.');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });


// TODO - 5
// Buatlah function filterByMajor yang mencari semua user berdasarkan major
// Gunakan metode async await
// Gunakan metode filter untuk menyaring user
const filterByMajor = async (major) => {
    try {
      const filteredUsers = await new Promise((resolve) => {
        
        const usersWithMajor = users.filter((user) => user.major === major);
        resolve(usersWithMajor);
      });
  
    
      return filteredUsers;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };
  
  const searchMajor = "Web";
  filterByMajor(searchMajor)
    .then((filteredUsers) => {
      console.log('Users with Major', searchMajor, ':', filteredUsers);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

export default UsersController;



