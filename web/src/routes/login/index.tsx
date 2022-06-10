import './style.css'
import { FunctionalComponent, h } from 'preact'

const Login: FunctionalComponent = () => {
  return (
    <div class="static flex flex-col w-1/2 mx-auto bg-white rounded-xl items-center p-8 space-y-4">
      <h1 class="bold">Login</h1>
      <form class="flex flex-col space-y-4">
        <label class="block space-x-4">
          <span class="block text-sm font-medium text-slate-700">Token</span>
          <input
            type="text"
            class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
          />
        </label>
        <button class="rounded-xl w-1/2 mx-auto bg-violet-500 hover:bg-violet-400 active:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300">
          Log in
        </button>
      </form>
    </div>
  )
}

export default Login
