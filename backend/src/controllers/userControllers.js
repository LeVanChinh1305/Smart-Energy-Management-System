export const getUser = (req, res) => { // lấy thông tin người dùng
    res.status(200).send('Hello word!');
}
export const updateUser = (req, res) => { // cập nhật thông tin người dùng
    res.send('PUT request to the homepage');
}
export const deleteUser = (req, res) => { // xóa người dùng
    res.status(200).json("DELETE request to the homepage");
}   
export const createUser = (req, res) => { // tạo người dùng
    res.send('POST request to the homepage');
}
