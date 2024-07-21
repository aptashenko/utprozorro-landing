import {reactive, ref} from "vue";
import {FETCH} from "@/api/index.js";

const userList = ref(null);
const loaders = reactive({
    sendMail: false,
    addUser: false,
    support: false
})
export function useFetchUsers() {
    const getAllUsers = async () => {
        try {
            const {data, status} = await FETCH.users.GET_LIST();
            if (status === 200) {
                userList.value = data;
            }
        } catch (er) {
            console.error(er)
        }
    }

    const addNewUser = async (payload) => {
        loaders.addUser = true
        try {
            const { status } = await FETCH.users.ADD(payload)
            if (status === 200) {
                return true
            }
        } catch (er) {
            console.error(er)
            return false
        } finally {
            loaders.addUser = false
        }
    }

    const sendPromocode = async (payload) => {
        loaders.sendMail = true
        try {
            const { status } = await FETCH.users.SEND_EMAIL(payload)
            if (status === 200) {
                return true
            }
        } catch (er) {
            console.error(er)
            return false
        } finally {
            loaders.sendMail = false
        }
    }

    const sendSupport = async (payload) => {
        loaders.support = true
        try {
            const { status } = await FETCH.users.SUPPORT(payload)

            if (status === 200) {
                return true
            }

        } catch (error) {
            console.error(error)
            return false
        } finally {
            loaders.support = false
        }
    }

    return {
        getAllUsers,
        loaders,
        sendPromocode,
        addNewUser,
        sendSupport
    }
}
