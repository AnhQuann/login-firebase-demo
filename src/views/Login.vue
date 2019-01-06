<template>
    <div>
        <h3>SIGN IN</h3>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button @click="login" style="margin-right: 10px">Login</button>
        <button><router-link to='/sign-up'>Sign Up</router-link></button>
        <p></p>
    </div>
</template>

<script>
    import firebase from 'firebase';

    export default {
        name: 'login',
        data() {
            return{
                email: '',
                password: ''
            };
        },
        methods: {
            login: function() {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                        console.log(user.user.refreshToken);
                        this.$router.replace('home')
                    },
                    (err) => {
                        alert('Oops. ' + err.message);
                    }
                );
            }
        }
    }
</script>

<style scoped>

</style>