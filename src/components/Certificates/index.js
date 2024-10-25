import './index.css'

const certificates = [
    {
        id: '1',
        title: 'BUILD YOUR OWN STATIC WEBSITE',
        imageUrl:'https://res.cloudinary.com/sree4441/image/upload/v1720030118/AXXFPPGEQI_1_p4hauy.jpg',
        
    },
    {
        id: '2',
        title: 'BUILD YOUR OWN RESPONSIVE WEBSITE',
        imageUrl:'https://res.cloudinary.com/sree4441/image/upload/v1720030118/DAFURNBVVX_1_czrkkn.jpg',
        
    },
    {
        id: '3',
        title: 'INTRODUCTION TO DATABASES',
        imageUrl:'https://res.cloudinary.com/sree4441/image/upload/v1720030119/WHLQDDQLZD_1_cg8cwv.jpg',
        
    },
    {
        id: '4',
        title: 'PROGRAMMING FOUNDATIONS WITH PYTHON',
        imageUrl:'https://res.cloudinary.com/sree4441/image/upload/v1720030119/ZTLVMYPFKZ_1_ydluke.jpg',
        
    },
    {
        id: '5',
        title: 'DEVELOPER FOUNDATIONS',
        imageUrl:'https://res.cloudinary.com/sree4441/image/upload/v1720030118/IIRVTLIYWW_1_tdrrwy.jpg',
        
    },
    {
        id: '6',
        title: 'BUILD YOUR OWN DYNAMIC WEB APPLICATION',
        imageUrl:'https://res.cloudinary.com/sree4441/image/upload/v1720030118/EIQULRWOGR_1_vbn39t.jpg',
        
    },
    {
        id: '7',
        title: 'JAVASCRIPT ESSENTIALS',
        imageUrl:'https://res.cloudinary.com/sree4441/image/upload/v1720030118/OUPDCZPZNY_1_peztb9.jpg',
        
    },
    {
        id: '8',
        title: 'RESPONSIVE WE DESIGN USING FLEXBOX',
        imageUrl:'https://res.cloudinary.com/sree4441/image/upload/v1720030119/SFQSBCWSGH_1_wrjokk.jpg',
        
    },
    {
        id: '9',
        title: 'NODE JS',
        imageUrl:'https://res.cloudinary.com/sree4441/image/upload/v1720030118/MWIVCLQWIU_1_bjnxdy.jpg',
        
    },
    {
        id: '10',
        title: 'REACT JS',
        imageUrl:'https://res.cloudinary.com/sree4441/image/upload/v1720030118/GUGSVRKJST_1_pmxdve.jpg',
        
    }
]

const Certificates = () => (
    <div className='certificate-section certificate-md' id='certificates'>
        <div class="wrapper">
        <div class="bg"> Certificates </div>
        <div class="fg"> Certificates </div>
      </div>
        <div className='certificate-main-container-card'>
        <div className="certificates-container">
      {certificates.map((cert) => (
        <div className="certificate-card" key={cert.id}>
          <img src={cert.imageUrl} alt={cert.title} className="certificate-image" />
          <h3 className="certificate-title">{cert.title}</h3>
        </div>
      ))}
    </div>
    </div>
    </div>
)

export default Certificates