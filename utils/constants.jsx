import { AiFillHome, AiOutlineFlag } from 'react-icons/ai';
import { FiHelpCircle, FiSettings, FiFilm } from 'react-icons/fi';
import { MdLiveTv, MdLocalFireDepartment } from 'react-icons/md';
import { RiFeedbackLine, RiLightbulbLine } from 'react-icons/ri';
import { CgMusicNote } from 'react-icons/cg';
import { IoGameControllerSharp } from 'react-icons/io5';
import { GiEclipse } from 'react-icons/gi'; // Bu ikonu kullandığınız yerin doğruluğunu kontrol edin
// Uygun bir ikon bulun veya eksik olan ikonları düzeltin
// InNewSpaper ikonu gibi bir ikon yok, doğru bir ikonu seçmelisiniz.

export const categories = [
  {
    name: "Anasayfa",
    icon: <AiFillHome />,
    type: 'home',
  },
  {
    name: "Trend",
    icon: <MdLocalFireDepartment />,
    type: 'trending',
  },
  {
    name: "Müzik",
    icon: <CgMusicNote />,
    type: 'category',
  },
  {
    name: "Filmler",
    icon: <FiFilm />,
    type: 'category',
  },
  {
    name: "Canlı",
    icon: <MdLiveTv />,
    type: 'category',
  },
  {
    name: "Oyun",
    icon: <IoGameControllerSharp />,
    type: 'category',
  },
  {
    name: "Haberler",
    icon: <IoGameControllerSharp />,
    type: 'category',
  },
  {
    name: "Spor",
    // Uygun bir ikon seçin veya yaratın, burada hata var.
    icon: <IoGameControllerSharp />, // Örneğin bu ikonu kullanabilirsiniz
    type: 'category',
  },
  {
    name: "Eğitici",
    icon: <RiLightbulbLine />,
    type: 'category',
  },
  {
    name: "Güzellik & kozmetik",
    icon: <GiEclipse />,
    type: 'category',
  },
  {
    name: "Ayarlar",
    icon: <FiSettings />,
    type: 'menu',
  },
  {
    name: "Report History",
    icon: <AiOutlineFlag />,
    type: 'menu',
  },
  {
    name: "Yardım",
    icon: <FiHelpCircle />,
    type: 'menu',
  },
  {
    name: "Send feedback",
    icon: <RiFeedbackLine />,
    type: 'menu',
  },
];
