import Header from '@/Components/Blog/Header/Header'
import ContainerContent from '@/Components/Container/ContainerContent'
import BlogLayout from '@/Layouts/Blog/BlogLayout'
import { useForm } from '@inertiajs/react'
import React from 'react'

export default function View(props) {
    const tugas = props.tugas
    const { data, setData, post, errors } = useForm({
        id: tugas.id,
        nama_siswa: '',
        asal_sekolah: '',
        foto_tugas: '',
    })
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        post(route('view-store'))

    }
    console.log(tugas);
    return (
        <div>
            <Header background={true}>
                <div className="relative w-[90%] md:w-[70%] lg:w-[60vw] h-[100%] flex flex-col justify-center items-center">
                    <Header.Title size="8xl">
                        {tugas.nama_tugas}
                    </Header.Title>

                </div>

            </Header>
            <div className='bg-slate-950 h-screen w-full px-8 py-8'>
                <div className='flex md:flex-row flex-col gap-3'>
                    <div className='border border-slate-700/50 rounded-md py-2 px-3 w-[100%] lg:w-[70%] bg-white'>
                        <h1 className='font-bold text-3xl'>{tugas.nama_tugas}</h1>
                        <img src={"/storage/" + tugas.foto_tugas} alt="" />
                        <p>halo adik-adik kursus, ini adalah halaman untuk mengupload tugas {tugas.nama_tugas}, untuk mendapatkan nilai sempurna dalam pembelajaran coreldraw selama kursus berjalan, silahkan melakukan
                            penguploatan tugas
                        </p>
                        <h1 className='text-slate-950 text-xl py-3 px-4'>DAFTAR TUGAS YANG TELAH TERKUMPUL</h1>
                        {tugas.form_tugas && tugas.form_tugas.map((item, key) =>
                            <div className='bg-slate-950 text-white rounded-md px-3 py-3 my-2.5'>
                                <h3 className='font-bold text-xl'>{item.nama_siswa}</h3>
                                <h3 className='font-light text-md'>{item.asal_sekolah}</h3>
                                <img src={"/storage/" + item.foto_tugas} alt="" />
                            </div>)}
                    </div>
                    <div className='border border-slate-700/50 rounded-md py-2 px-3 w-full lg:w-[30%] bg-white'>
                        <form action="" onSubmit={submitHandler}>
                            <div className='flex flex-col gap-3'>
                                <p>Nama Siswa</p>

                                <input onChange={changeHandler} name='nama_siswa' type="text" className='w-full bg-slate-950 border border-gray-600 border-dashed focus:border-none focus:ring-0 rounded-md text-white' />
                                {errors && <p className='text-[8pt] italic text-red-600'>{errors.nama_siswa}</p>}
                                <p>Asal Sekolah</p>
                                <input onChange={changeHandler} name='asal_sekolah' type="text" className='w-full bg-slate-950 border border-gray-600 border-dashed focus:border-none focus:ring-0 rounded-md text-white' />
                                {errors && <p className='text-[8pt] italic text-red-600'>{errors.asal_sekolah}</p>}
                                <p>Foto Tugas</p>
                                <input onChange={(e) => setData({ ...data, foto_tugas: e.target.files[0] })} name='foto_tugas' type="file" className='w-full bg-slate-950 border border-gray-600 border-dashed focus:border-none focus:ring-0 rounded-md text-white' />
                                {errors && <p className='text-[8pt] italic text-red-600'>{errors.foto_tugas}</p>}
                                <button type='submit' className='text-white bg-slate-950 border border-gray-600 border-dashed px-4 py-1 rounded-md'>SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

View.layout = (page) => <BlogLayout children={page} />