import {Trophy, MessageSquare, MessagesSquare, Search} from 'lucide-react'
import UserAvatar from '../../assets/user.png'
import Logo from '../../assets/logo-stackoverflow.png'
import AltLogo from '../../assets/stack-logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {


  return (
    <nav className="bg-white sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="hidden sm:block">
              <img src={Logo} alt='logo' className="h-8 w-auto" />
            </div>
            <div className="block sm:hidden">
              <img src={AltLogo} alt='logo-small' className="h-8 w-auto" />
            </div>
          </div>

          {/* Search Box */}
          <div className="flex-1 mx-6 relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <Search className="absolute top-1/2 right-3 transform -translate-y-1/2 text-amber-600  cursor-pointer" />
          </div>

          {/* Products */}
          <div className='mr-20'>
            <Link to={'/products'} >Products</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <MessageSquare className="text-gray-600 text-xl cursor-pointer hover:text-orange-500" />
            <Trophy className="text-gray-600 text-xl cursor-pointer hover:text-orange-500" />
            <MessagesSquare className="text-gray-600 text-xl cursor-pointer hover:text-orange-500" />
            <img src={UserAvatar} alt="user-avatar" className='w-10 border rounded-full hover:border-amber-600 cursor-pointer' />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar