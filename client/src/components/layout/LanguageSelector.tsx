import { 
  DropdownMenu,
  DropdownMenuContent, 
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  
  const languageLabels = {
    tr: "Türkçe",
    en: "English", 
    bg: "Български"
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
          <i className="ri-global-line mr-1"></i>
          <span>{languageLabels[language]}</span>
          <i className="ri-arrow-down-s-line ml-1"></i>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem onClick={() => setLanguage("tr")} className="flex items-center">
          <span className="mr-2">🇹🇷</span> Türkçe
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("en")} className="flex items-center">
          <span className="mr-2">🇬🇧</span> English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("bg")} className="flex items-center">
          <span className="mr-2">🇧🇬</span> Български
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
