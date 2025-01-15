import { ref , reactive } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore( 'auth' , () =>
{
    const phone = ref( '' )
    const fullName = ref( '' )
    const password = ref( '' )
    const iranianPhoneRegex = /^09\d{9}$/;
    // const isAuth = ref(false)

    const users = reactive( {
        "09302431385" : {
            fullName : "Ali" ,
            password : "123"
        } ,
        "09304857432" : {
            fullName : "Amir" ,
            password : "123"
        }
    } );

    function validationPhone() {
        return iranianPhoneRegex.test( phone.value )
    }

    function checkPhoneExists() {
        return phone.value in users;
    }

    function reset() {
        phone.value = ''
        password.value = ''
        fullName.value = ''
    }

    function addNewUser() {
        users[ phone.value ] = { fullName : fullName.value , password : password.value };
    }

    return { phone , fullName , password , users , validationPhone , checkPhoneExists , reset , addNewUser }
} )
