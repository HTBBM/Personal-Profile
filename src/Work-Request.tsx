import * as Dialog from '@radix-ui/react-dialog';

import { useState } from 'react';

import emailjs from '@emailjs/browser';

export const EmailForm = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [work, setWork] = useState('');

const handleSubmit = (evt: { preventDefault: () => void; }) => {
  evt.preventDefault();

  const serviceID = 'service_eok2rhv';
  const templateID = 'template_upygej8';
  const publicKey = 'smOm0iZ7smpj1qG1P';

  const templateParams = {
    from_name: name,
    from_email: email,
    from_work: work,
  }
  emailjs.send(serviceID, templateID, templateParams, publicKey)
  .then((response) => {
    console.log('Email sent successfully!', response);
    setName('');
    setEmail('');
    setWork('');
  })
  .catch((error) => {
    console.error('Error sending email!', error);
  })
  };

  return(
    <div>
                      
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0">
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-green-500 p-[25px]  focus:outline-none">
          <Dialog.Title className="m-0 font-JetBrains font-bold text-[32px] text-center">
            Work Request
          </Dialog.Title>
          <Dialog.Description className="text-green-800 mb-6 text-center">
              Write all things you need and I go make the budget
          </Dialog.Description>
          <div className=''>
           <form className="w-[400px] relative" onSubmit={handleSubmit}>
            <div className=" grid mb-[2px]">
              <div className="flex items-baseline justify-between">
              
                <h2 className="text-lg font-semibold font-JetBrains leading-[35px] text-zinc-900">
                      Full Name
                </h2>
                  
                {/* <h4 className=" text-red-600 font-Inter font-semibold text-sm   opacity-[0.8]" >
                  Insert your name
                </h4> */}
                <h4 className=" text-red-600 font-Inter font-semibold text-sm opacity-[0.8]">
                  --
                </h4>
                
              </div>
              <div>
                <input
                  className="box-border font-JetBrains tracking-wider w-full bg-zinc-900 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-lg leading-none text-indigo-400 outline-none"
                  type="text"
                  value={name}
                  required
                  onChange={(evt) => setName(evt.target.value)}
                />
              </div>
            </div>
            <div className=" grid mb-[2px]">
              <div className="flex items-baseline justify-between">
                <h2 className="text-lg font-semibold font-JetBrains leading-[35px] text-zinc-900">
                      Email
                  </h2>
                {/* <h4 className=" text-red-600 font-Inter font-semibold text-sm opacity-[0.8]" >
                  Insert your email
                </h4>
                <h4 className=" text-red-600 font-Inter font-semibold text-sm opacity-[0.8]" >
                  Please insert a valid email
                </h4> */}
              </div>
              <div>
                <input
                  className="box-border font-JetBrains tracking-wider w-full bg-zinc-900 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-lg leading-none text-indigo-400 outline-none"
                  type="email"
                  value={email}
                  required
                  onChange={(evt) => setEmail(evt.target.value)}
                />
              </div>
            </div>
            <div className=''>
            <div className="grid mb-[10px] ">
              <div className="flex items-baseline justify-between">
                <h2 className="text-lg font-semibold font-JetBrains leading-[35px] text-zinc-900">
                  Work
                </h2>
                {/* <h4 className="text-red-600 font-Inter font-semibold text-sm opacity-[0.8]" >
                  Please enter the work
                </h4> */}
              </div>
              <div>
                <textarea
                  className="box-border font-Inter text-lg text-indigo-400 bg-zinc-900 w-full inline-flex appearance-none items-center justify-center rounded-[4px] h-56 line p-[20px]  leading-6 outline-none resize-none"
                  required
                  value={work}
                  onChange={(evt) => setWork(evt.target.value)}
                />
              </div>
            </div>
            <button
              type='submit'
              className="box-border w-full text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center 
              rounded-[20px] hover:bg-indigo-600 hover:text-slate-200 bg-zinc-900 border-4 text-green-400 border-green-500 
              border-solid bg-none p-[20px] font-medium leading-none shadow-[0_2px_10px]  outline-none mt-[2px]"
              >
                Enviar
              </button>
            
            
              
          
            </div>
          </form>
          
        </div>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
</div>
  );
}


<script src="./src/app.tsx"> </script>

// export function WorkRequest(){
//   return(
    


//     <div>
                      
//                                     <Dialog.Portal>
//                                       <Dialog.Overlay className="fixed inset-0">
//                                         <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-green-500 p-[25px]  focus:outline-none">
//                                           <Dialog.Title className="m-0 font-JetBrains font-bold text-[32px] text-center">
//                                             Work Request
//                                           </Dialog.Title>
//                                           <Dialog.Description className="text-green-800 mb-6 text-center">
//                                               Write all things you need and I go make the budget
//                                           </Dialog.Description>
//                                           <div className=''>
//                                            <form className="w-[400px] relative">
//                                             <div className=" grid mb-[2px]">
//                                               <div className="flex items-baseline justify-between">
                                              
//                                                 <h2 className="text-lg font-semibold font-JetBrains leading-[35px] text-zinc-900">
//                                                       Full Name
//                                                 </h2>
                                                  
//                                                 {/* <h4 className=" text-red-600 font-Inter font-semibold text-sm   opacity-[0.8]" >
//                                                   Insert your name
//                                                 </h4> */}
//                                                 <h4 className=" text-red-600 font-Inter font-semibold text-sm opacity-[0.8]">
//                                                   --
//                                                 </h4>
                                                
//                                               </div>
//                                               <div>
//                                                 <input
//                                                   className="box-border font-JetBrains tracking-wider w-full bg-zinc-900 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-lg leading-none text-indigo-400 outline-none"
//                                                   type="name"
//                                                   id='name'
//                                                   required
//                                                 />
//                                               </div>
//                                             </div>
//                                             <div className=" grid mb-[2px]">
//                                               <div className="flex items-baseline justify-between">
//                                                 <h2 className="text-lg font-semibold font-JetBrains leading-[35px] text-zinc-900">
//                                                       Email
//                                                   </h2>
//                                                 {/* <h4 className=" text-red-600 font-Inter font-semibold text-sm opacity-[0.8]" >
//                                                   Insert your email
//                                                 </h4>
//                                                 <h4 className=" text-red-600 font-Inter font-semibold text-sm opacity-[0.8]" >
//                                                   Please insert a valid email
//                                                 </h4> */}
//                                               </div>
//                                               <div>
//                                                 <input
//                                                   className="box-border font-JetBrains tracking-wider w-full bg-zinc-900 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-lg leading-none text-indigo-400 outline-none"
//                                                   type="email"
//                                                   id='email'
//                                                   required
//                                                 />
//                                               </div>
//                                             </div>
//                                             <div className=''>
//                                             <div className="grid mb-[10px] ">
//                                               <div className="flex items-baseline justify-between">
//                                                 <h2 className="text-lg font-semibold font-JetBrains leading-[35px] text-zinc-900">
//                                                   Work
//                                                 </h2>
//                                                 {/* <h4 className="text-red-600 font-Inter font-semibold text-sm opacity-[0.8]" >
//                                                   Please enter the work
//                                                 </h4> */}
//                                               </div>
//                                               <div>
//                                                 <textarea
//                                                   className="box-border font-Inter text-lg text-indigo-400 bg-zinc-900 w-full inline-flex appearance-none items-center justify-center rounded-[4px] h-56 line p-[20px]  leading-6 outline-none resize-none"
//                                                   required
//                                                 />
//                                               </div>
//                                             </div>
//                                             <input
//                                               type='button'
//                                               value="submit"
//                                               className="box-border w-full text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[20px] hover:bg-indigo-600 hover:text-slate-200 bg-zinc-900 border-4 text-green-400 border-green-500 border-solid bg-none p-[20px] font-medium leading-none shadow-[0_2px_10px]  outline-none mt-[2px]"
//                                               onClick={sendMail} />
                                            
                                            
                                              
                                          
//                                             </div>
//                                           </form>
                                          
//                                         </div>
//                                         </Dialog.Content>
//                                       </Dialog.Overlay>
//                                     </Dialog.Portal>
//                   </div>
//   )
// }