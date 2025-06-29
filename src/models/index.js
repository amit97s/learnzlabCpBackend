class User {
    constructor(database) {
        this.database = database;
    }
    async createUser(userData) {
        const newUser = await this.database.collection('users').insertOne(userData);
        return newUser.ops[0];
    }
    async findUserById(userId) {
        const user = await this.database.collection('users').findOne({ _id: userId });
        return user;
    }
}

export default User;