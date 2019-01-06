<template>
    <div>
        <h3>SIGN UP</h3>
        <input type="email" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button @click="signUp" style="margin-right: 10px">Sign Up</button>
        <button><router-link to='/login'>Sign In</router-link></button>
    </div>
</template>

<script>
    import firebase from 'firebase';
    export default {
        name: 'signUp',
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            signUp: function() {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
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