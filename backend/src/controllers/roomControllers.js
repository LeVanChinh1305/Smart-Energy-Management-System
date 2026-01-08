export const getRoom = (req, res) => { // lấy thông tin phòng
    res.status(200).send('Hello word!');
}
export const updateRoom = (req, res) => { // cập nhật thông tin phòng
    res.send('PUT request to the homepage');
}
export const deleteRoom = (req, res) => { // xóa phòng
    res.status(200).json("DELETE request to the homepage");
}
export const createRoom = (req, res) => { // tạo phòng
    res.send('POST request to the homepage');
}   