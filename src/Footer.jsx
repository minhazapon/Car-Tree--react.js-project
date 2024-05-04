

const Footer = () => {
    return (
        <div>

            <div>


            <footer className="footer p-10  bg-blue-900 text-white">
  <nav>
  <h6 className="footer-title">Social media</h6> 
    <div className=' flex items-center gap-2'>
     <img className=' h-[30px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/800px-Facebook_logo_%28square%29.png" alt="" /> 
    <a className="link link-hover">Facebook</a>
    </div>
    <div className=' flex items-center gap-2'>
      <img className=' h-[30px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png?20140125013055" alt="" />
    <a className="link link-hover">Linkedin</a>
    </div>
    <div className=' flex items-center gap-2'>
      <img className=' h-[30px]' src="https://seeklogo.com/images/T/twitter-2012-negative-logo-5C6C1F1521-seeklogo.com.png" alt="" />
    <a className="link link-hover">Twitter</a>
    </div>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  <form>
    <div className=" flex items-center gap-3">
     <img className=" h-[40px]" src="https://i.ibb.co/KmMY18L/tyre.png" alt="" />
    <h6 className="text-2xl font-bold text-white">CAR TREE</h6>
    </div> 


    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text text-white">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
        <button className="btn bg-blue-500 join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>















            </div>
            
        </div>
    );
};

export default Footer;