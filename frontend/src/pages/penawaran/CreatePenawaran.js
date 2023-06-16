import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LayoutAdmin from '../../layout/LayoutAdmin'
import axios from 'axios'
import Swal from 'sweetalert2'

function CreatePenawaran() {

	const [values, setValues] = useState({
        nama_pemesan: '',
        nohp_pemesan: '',
        alamat_pemesan: '',
        barang_pemesan: '',
		spesifikasi_pemesan:'',
		harga_pemesan: ''

    })

	const navigate = useNavigate();

	const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/tambahpenawaran', values)
        .then(res => {
            Swal.fire({
				icon:"success",
				title:"SUCCESS",
				text:"Data Berhasil Disimpan"
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
						<h4 class="page-title">Create Data Penawaran</h4>
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
								<Link href="#">Create Data</Link>
							</li>
							<li class="separator">
								<i class="flaticon-right-arrow"></i>
							</li>
							<li class="nav-item">
								<Link href="#">Penawaran</Link>
							</li>
						</ul>
					</div>
					<div class="row">
						<div class="col-md-12">
							<div class="card">
								<div class="card-header">
									<div class="d-flex align-items-center">
										<h4 class="card-title">Create Data Penawaran</h4>
									</div>
								</div>
								<form onSubmit={handleSubmit}>
								<div class="card-body">
									<div className='form-group'>
										<label>Customer</label>
										<input type='text' className='form-control' name='nama_customer' placeholder='Nama Customer ...' 
										onChange={e => setValues({...values, nama_pemesan: e.target.value})} required 
										/>
									</div>
									<div className='form-group'>
										<label>No Handphone</label>
										<input type='number' className='form-control' name='nohp_customer' 
										onChange={e => setValues({...values, nohp_pemesan: e.target.value})} required />
										
									</div>
									<div className='form-group'>
										<label>Alamat</label>
										<textarea className='form-control' rows='5' name='email_customer' placeholder='Alamat ...' 
										onChange={e => setValues({...values, alamat_pemesan: e.target.value})} required 
										></textarea>
									</div>
									<div className='form-group'>
										<label>Nama Barang</label>
										<textarea className='form-control' rows='5' name='alamat_customer' placeholder='Nama Barang ...' 
										onChange={e => setValues({...values, barang_pemesan: e.target.value})} required 
                                         ></textarea>
									</div>
									<div className='form-group'>
										<label>Spesifikasi</label>
										<textarea className='form-control' rows='5' name='alamat_customer' placeholder='Spesifikasi ...' 
										onChange={e => setValues({...values, spesifikasi_pemesan: e.target.value})} required
                                         ></textarea>
									</div>
									<div className='form-group'>
										<label>Harga</label>
										<input type='number' className='form-control' name='nohp_customer' 
										  onChange={e => setValues({...values, harga_pemesan: e.target.value})} required/>
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

export default CreatePenawaran
