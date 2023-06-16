import db from "../config/Database.js";

export const Me = async (req, res) =>{
    return res.json({Status: "Success", name: req.name, role: req.role});
}

export const Tampil = async (req, res) =>{
    const sql = "SELECT * FROM tbl_penawaran";
    db.query(sql, (err, result) => {
        if(err) return res.json({Error: "Error inside server"});
        return res.json(result);
    })
}

export const Tambah = async (req, res) =>{
    const sql = "INSERT INTO tbl_penawaran (`nama_pemesan`,`nohp_pemesan`,`alamat_pemesan`,`barang_pemesan`,`spesifikasi_pemesan`,`harga_pemesan`) VALUES (?)";
    const values = [
        req.body.nama_pemesan,
        req.body.nohp_pemesan,
        req.body.alamat_pemesan,
        req.body.barang_pemesan,
        req.body.spesifikasi_pemesan,
        req.body.harga_pemesan,
    ]
    db.query(sql, [values], (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
}

export const Edit = async (req, res) =>{
    const sql = "SELECT * FROM tbl_penawaran WHERE id = ?";
    const id = req.params.id;
    db.query(sql,[id], (err, result)=> {
        if(err) return res.json({Error: "Error inside server"});
        return res.json(result);
    })
}

export const Update = async (req, res) =>{
    const sql = "UPDATE tbl_penawaran SET `nama_pemesan`=?, `nohp_pemesan`=?, `alamat_pemesan`=?, `barang_pemesan`=?, `spesifikasi_pemesan`=?, `harga_pemesan`=? WHERE id=?";
    const id = req.params.id;
    
    db.query(sql, [req.body.nama_pemesan, req.body.nohp_pemesan, req.body.alamat_pemesan, req.body.barang_pemesan, req.body.spesifikasi_pemesan, req.body.harga_pemesan, id], (err, result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
}

export const Delete = async (req, res) =>{
    const sql = "DELETE FROM tbl_penawaran WHERE id = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if(err) return res.json({Error: "Error inside server"});
        return res.json(result);
    })
}