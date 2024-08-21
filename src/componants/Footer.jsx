import React from 'react';
import { FaFacebook,  FaGithub, FaYoutube, FaTelegram} from 'react-icons/fa'; // השתמש ב-react-icons לאייקונים

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-center py-8 px-6  border-t border-gray-300">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-6">
          <p className="text-white text-lg mb-2">&copy; {new Date().getFullYear()}  Gaijin Games Kft. The website is operated by Gaijin Network Ltd. All trademarks, logos and brand names are the property of their respective owners. (Project of Avraham Kobler.)</p>
          <p className="text-white text-sm mb-4">Follow us on social media:</p>
          <div className="flex space-x-6 mb-4">
            
            <a href="https://www.youtube.com/@Warthunder" target='black' className="text-red-600 hover:text-red-700">
              <FaYoutube size={28} />
            </a>
            
            <a href="https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqbnN6MXJhcEJYUHFBQks2ZU93NE5DdlJkXzE3QXxBQ3Jtc0trRmJxanZ2ZWJLN19fRlFIWW9icExfTFFrTGs4NVBlT2ZGRmRiYnZMNnNWdlN6MmNtZ1UyQTdmNWpzZDFTS3R0ZzdBVWVmVkNyZDhZZkV2bG40R2NxZXhxMVFLdlpaYVhUdGF4ODhoa1hMVlhMVmtzbw&q=https%3A%2F%2Ft.me%2Fwarthunder" target='black' className="text-blue-400 hover:text-blue-600">
              <FaTelegram size={28} />
            </a>
            <a href="https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqbGVSU2x0U2xQZDRDdWEydlIwV21FVUhaUzNNZ3xBQ3Jtc0ttS09fMndPbkR2WXo1bjlQUUQ3Q0lLNDNMVzlKdGhpaURaVGNOVDI4emtSaXJsSHgxYWl1Um9qcmRTV1FrU2pkcXUyQlU3LXdOT1NuX2VQQVpneHVhN0JWNm5MMDhwZFRvRFRaaU5KODJsY0hiS0c4NA&q=https%3A%2F%2Fwww.facebook.com%2FWarThunder" target='black' className="text-blue-600 hover:text-blue-800">
              <FaFacebook size={28} />
            </a>
            <a href="https://github.com" target='black' className="text-gray-900 hover:text-white">
              <FaGithub size={28} />
            </a>
          </div>
          <p className="text-white text-sm mb-2">Designed and developed by Avraham Kobler</p>
          
          <p className="text-white text-sm mb-2">DEPICTION OF ANY REAL-WORLD WEAPON OR VEHICLE IN THIS GAME DOES NOT MEAN PARTICIPATION IN GAME DEVELOPMENT, SPONSORSHIP OR ENDORSEMENT BY ANY WEAPON OR VEHICLE MANUFACTURER.</p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;