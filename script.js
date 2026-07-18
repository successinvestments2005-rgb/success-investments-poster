*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial,Helvetica,sans-serif;
}

body{
    background:linear-gradient(135deg,#d9ecff,#0b4ea2);
    padding:40px;
}

.container{
    max-width:1200px;
    margin:auto;
    display:grid;
    grid-template-columns:380px 1fr;
    gap:30px;
}

.form-card,
.poster-card{
    background:#fff;
    border-radius:20px;
    padding:30px;
    box-shadow:0 10px 30px rgba(0,0,0,.15);
}

.logo{
    text-align:center;
    color:#0047AB;
    font-size:34px;
    font-weight:bold;
}

.sub{
    text-align:center;
    color:#FDB913;
    font-size:22px;
    margin-bottom:25px;
}

input,
select{
    width:100%;
    padding:12px;
    margin-bottom:15px;
    border:1px solid #ccc;
    border-radius:8px;
    font-size:16px;
}

button{
    width:100%;
    padding:14px;
    border:none;
    border-radius:10px;
    background:#FDB913;
    color:#003366;
    font-size:18px;
    font-weight:bold;
    cursor:pointer;
    margin-top:10px;
}

button:hover{
    background:#ffc400;
}

.poster{
    width:794px;
    min-height:1123px;
    margin:auto;
    background:#fff;
    color:#222;
    padding:50px;
    border-radius:15px;
}

.poster h1{
    color:#0047AB;
    text-align:center;
    font-size:44px;
}

.poster h2{
    color:#FDB913;
    text-align:center;
    margin:10px 0;
}

.tagline{
    text-align:center;
    color:#666;
    margin-bottom:30px;
}

.details{
    width:100%;
    border-collapse:collapse;
    margin-top:25px;
}

.details td{
    border-bottom:1px solid #ddd;
    padding:12px;
    font-size:20px;
}

.benefits{
    margin-top:35px;
    background:#FFF9E6;
    padding:25px;
    border-radius:12px;
}

.benefits h3{
    color:#0b4ea2;
    margin-bottom:15px;
}

.footer{
    margin-top:40px;
    text-align:center;
}

.downloads{
    display:flex;
    gap:15px;
    margin-top:20px;
}

.downloads button{
    flex:1;
}

@media(max-width:1000px){

.container{
    grid-template-columns:1fr;
}

.poster{
    width:100%;
    padding:25px;
}

}
