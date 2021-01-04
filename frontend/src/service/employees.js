import { http } from "./config"

export default {
    list(){
        return http.get('/list')
    }, 
    delete(id){
        return http.delete(`/delete/${id}`)
    }, 
    getOne(id){
        return http.get(`/employee/${id}`)
    },
    save(employee){
        return http.post('/create', employee)
    },
    edit(employee, id){

        return http.put(`/edit/${id}`, employee)
    }
}