import React, {useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import LayoutAdmin from '../../layout/LayoutAdmin'

function EditPenawaran() {
	
	const navigate = useNavigate();

    const {id} = useParams();
    
    const [values, setValues] = useState({
        nama_pemesan: '',
        nohp_pemesan: '',
        alamat_pemesan: '',
        barang_pemesan: '',
		spesifikasi_pemesan: '',
		harga_pemesan: ''
    })

    useEffect(()=> {
        axios.get('http://localhost:8081/editpenawaran/'+id)
        .then(res => {
            console.log(res)
            setValues({
                ...values, 
                nama_pemesan: res.data[0].nama_pemesan, 
                nohp_pemesan: res.data[0].nohp_pemesan,
                alamat_pemesan: res.data[0].alamat_pemesan,
                barang_pemesan: res.data[0].barang_pemesan,
				spesifikasi_pemesan: res.data[0].spesifikasi_pemesan,
				harga_pemesan: res.data[0].harga_pemesan,
            });
        })
        .catch(err => console.log(err));
    }, [])

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8081/updatepenawaran/'+id, values)
        .then(res => {
            Swal.fire({
				icon:"success",
				title:"SUCCESS",
				text:"Data Berhasil Diubah"
			})
            navigate('/penawaran')
        })
        .catch(err => console.log(err));
    }

  return (
    <div class="wrapper">
        <LayoutAdmin />
        
        <div class="main-panel">
			<div class="content">
				<div class="page-inner">
					<div class="page-header">
						<h4 class="page-title">Edit Data Penawaran</h4>
						<ul class="breadcrumbs">
							<li class="nav-home">
								<Link href="#">
									<i class="flaticon-home"></i>
								</Link>
							</li>
							<li class="separator">
								<i class="flaticon-right-arrow"></i>
							</li>
							<li class="nav-item">
								<Link href="#">Edit Data</Link>
							</li>
							<li class="separator">
								<i class="flaticon-right-arrow"></i>
							</li>
							<li class="nav-item">
								<Link href="#">penawaran</Link>
							</li>
						</ul>
					</div>
					<div class="row">
						<div class="col-md-12">
							<div class="card">
								<div class="card-header">
									<div class="d-flex align-items-center">
										<h4 class="card-title">Edit Data Penawaran</h4>
									</div>
								</div>
								<form onSubmit={handleUpdate}>
								<div class="card-body">
                                    <div className='form-group'>
										<label>Nama Customer</label>
										<input type='text' className='form-control' name='nama_pemesan' placeholder='Nama Customer ...' 
										value={values.nama_pemesan} onChange={e => setValues({...values, nama_pemesan: e.target.value})} required />
									</div>
									<div className='form-group'>
										<label>No Handphone</label>
										<input type='number' className='form-control' rows='5' name='nohp_pemesan' placeholder='No Handphone' 
										value={values.nohp_pemesan} onChange={e => setValues({...values, nohp_pemesan: e.target.value})} required />
									</div>
									<div className='form-group'>
										<label>Alamat</label>
										<textarea className='form-control' rows='5' name='alamat_pemesan' placeholder='Alamat ...' 
										value={values.alamat_pemesan} onChange={e => setValues({...values, alamat_pemesan: e.target.value})} required />
									</div>
									<div className='form-group'>
									<label>Nama Barang</label>
										<input type='text' className='form-control' name='barang_pemesan' placeholder='Nama Barang ...' 
										value={values.barang_pemesan} onChange={e => setValues({...values, barang_pemesan: e.target.value})} required />
									</div>
									<div className='form-group'>
										<label>Spesifikasi</label>
										<textarea className='form-control' rows='5' name='spesifikasi_pemesan' placeholder='Spesifikasi Barang ...' 
										value={values.spesifikasi_pemesan} onChange={e => setValues({...values, spesifikasi_pemesan: e.target.value})} required />
									</div>
									<div className='form-group'>
										<label>Harga</label>
										<input type='number' className='form-control' rows='5' name='harga_pemesan' placeholder='Harga ...' 
										value={values.harga_pemesan} onChange={e => setValues({...values, harga_pemesan: e.target.value})} required />
									</div>
								</div>
								<div className='card-footer'>
									<button type='submit' className='btn btn-primary'><i className='fa fa-save'></i> Save Changes</button> &nbsp;
									<Link to="/penawaran" className='btn btn-danger'><i className='fa fa-undo'></i> Kembali</Link>
								</div>
								</form>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
    </div>
  )
}

export default EditPenawaran
