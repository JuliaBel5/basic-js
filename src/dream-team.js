const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
  if (!Array.isArray(members)) {
    return false 
   } else 

   function contaitsWhitespace(members) {
    const newMembers = members.map(function(item){
      item.replace(/\s+/g,'');
    })
    return newMembers;
   }
   
 const names = members.filter(element => typeof element === "string");
 const newMembers = names.map(function(item){
  return item.replace(/\s+/g,'');
})
 //newMembers.map((el) => el )
  
 let title = "";

 const namesFirstLetterUpperCase =  newMembers.map( (el) => el[0].toUpperCase());
 const sortedNames = namesFirstLetterUpperCase.sort()
  title = sortedNames.join("");
return title;  
 }


module.exports = {
  createDreamTeam
};
