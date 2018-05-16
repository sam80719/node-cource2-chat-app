[{
    id: 'adasd',
    name: 'sam',
    room: 'heaven'
}]

//adduser(id, name, room)
//removeuser(id)
//getuser(id)
//getuserlist(room)

// var users =[];

// var addUser = (id, name, room) =>{
// 	users.push({})
// }
// module.exports- {addUser}

class Users {
    constructor() {
        this.users=[];
    }
    addUser(id, name, room){
    	var user = {id, name, room};
    	this.users.push(user);
    	return user;
    }
    removeUser(id){
    	// var user = this.users.filter((user)=>user.id===id)[0]
    	var user = this.getUser(id);

    	if (user){
    		this.users = this.users.filter((user)=>user.id !==id);
    	}
    	return user;
    	//return user that was removed

    }
    getUser(id){
    	return this.users.filter((user)=>user.id===id)[0]
    }
    getUserList(room){
    	var users = this.users.filter((user) => user.room === room);
    	var nameArray = users.map((user)=>user.name);

    	return nameArray;
    }
}

module.exports={Users};




// object learning (es6)
// class Person {
// 	constructor(name, age) {
// 		// console.log(name, age)
// 		this.name = name;
// 		this.age= age;
// 	}
// 	getUserDescription(){
// 		// return `ken is 1 year old`;
// 		return `${this.name} is ${this.age} year(s) old.`;
// 	}

// } 

// var me = new Person('sam', 26);
// var description = me.getUserDescription();
// console.log(description);

// console.log('this.name', me.name);
// console.log('this.age', me.age);