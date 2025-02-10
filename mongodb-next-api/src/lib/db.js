const{username,passsword}=process.env
export const ConnectionSrt ="mongodb+srv://"+username+":"+passsword+"@cluster0.crjsx.mongodb.net/ProductDB?retryWrites=true&w=majority&appName=Cluster0"