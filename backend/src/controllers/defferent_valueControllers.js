export const getDefferent_value = (req, res) => { // lấy giá trị khác biệt
    res.status(200).send('Hello word!');
}
export const updateDefferent_value = (req, res) => { // cập nhật giá trị khác biệt
    res.send('PUT request to the homepage');
}
export const deleteDefferent_value = (req, res) => { // xóa giá trị khác biệt
    res.status(200).json("DELETE request to the homepage");
}
export const createDefferent_value = (req, res) => { // tạo giá trị khác biệt
    res.send('POST request to the homepage');
}   