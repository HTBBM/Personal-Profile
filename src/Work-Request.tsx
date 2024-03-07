import * as Dialog from '@radix-ui/react-dialog';
import * as Form from '@radix-ui/react-form';

export function WorkRequest(){
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
                                           <Form.Root className="w-[400px] relative">
                                            <Form.Field className=" grid mb-[2px]" name="name">
                                              <div className="flex items-baseline justify-between">
                                              
                                                <Form.Label className="text-lg font-semibold font-JetBrains leading-[35px] text-zinc-900">
                                                      Full Name
                                                </Form.Label>
                                                  
                                                <Form.Message className=" text-red-600 font-Inter font-semibold text-sm   opacity-[0.8]" match="valueMissing">
                                                  Insert your name
                                                </Form.Message>
                                                <Form.Message className=" text-red-600 font-Inter font-semibold text-sm opacity-[0.8]" match="typeMismatch">
                                                  --
                                                </Form.Message>
                                                
                                              </div>
                                              <Form.Control asChild>
                                                <input
                                                  className="box-border font-JetBrains tracking-wider w-full bg-zinc-900 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-lg leading-none text-indigo-400 outline-none"
                                                  type="name"
                                                  required
                                                />
                                              </Form.Control>
                                            </Form.Field>
                                            <Form.Field className=" grid mb-[2px]" name="email">
                                              <div className="flex items-baseline justify-between">
                                                <Form.Label className="text-lg font-semibold font-JetBrains leading-[35px] text-zinc-900">
                                                      Email
                                                  </Form.Label>
                                                <Form.Message className=" text-red-600 font-Inter font-semibold text-sm opacity-[0.8]" match="valueMissing">
                                                  Insert your email
                                                </Form.Message>
                                                <Form.Message className=" text-red-600 font-Inter font-semibold text-sm opacity-[0.8]" match="typeMismatch">
                                                  Please insert a valid email
                                                </Form.Message>
                                              </div>
                                              <Form.Control asChild>
                                                <input
                                                  className="box-border font-JetBrains tracking-wider w-full bg-zinc-900 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-lg leading-none text-indigo-400 outline-none"
                                                  type="email"
                                                  required
                                                />
                                              </Form.Control>
                                            </Form.Field>
                                            <div className=''>
                                            <Form.Field className="grid mb-[10px] " name="question">
                                              <div className="flex items-baseline justify-between">
                                                <Form.Label className="text-lg font-semibold font-JetBrains leading-[35px] text-zinc-900">
                                                  You need
                                                </Form.Label>
                                                <Form.Message className="text-red-600 font-Inter font-semibold text-sm opacity-[0.8]" match="valueMissing">
                                                  Please enter the work
                                                </Form.Message>
                                              </div>
                                              <Form.Control asChild>
                                                <textarea
                                                  className="box-border font-Inter text-lg text-indigo-400 bg-zinc-900 w-full inline-flex appearance-none items-center justify-center rounded-[4px] h-56 line p-[20px]  leading-6 outline-none resize-y"
                                                  required
                                                />
                                              </Form.Control>
                                            </Form.Field>
                                            <Form.Submit asChild>
                                              <button type='submit' className="box-border w-full text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[20px] hover:bg-indigo-600 hover:text-slate-200 bg-zinc-900 border-4 text-indigo-400 border-indigo-400 border-solid bg-none p-[20px] font-medium leading-none shadow-[0_2px_10px]  outline-none mt-[2px]">
                                                Send Work
                                              </button>
                                              
                                            </Form.Submit>
                                            </div>
                                          </Form.Root>
                                          
                                        </div>
                                        </Dialog.Content>
                                      </Dialog.Overlay>
                                    </Dialog.Portal>
                  </div>
  )
}