export const getRoom_user = (req, res) => { // lấy thông tin người dùng trong phòng
    res.status(200).send('Hello word!');
}
export const updateRoom_user = (req, res) => { // cập nhật thông tin người dùng trong phòng
    res.send('PUT request to the homepage');
}
export const deleteRoom_user = (req, res) => { // xóa người dùng khỏi phòng
    res.status(200).json("DELETE request to the homepage");
}
export const createRoom_user = (req, res) => { // thêm người dùng vào phòng
    res.send('POST request to the homepage');
}
