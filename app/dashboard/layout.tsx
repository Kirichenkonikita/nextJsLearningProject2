import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        {/* Навигационное меню, размещенное слева, содержащие кликабельный логотип AcmeLogo навигационные кнопки NavLinks, изменяющие адресную строку по клику b и иконку логаута PowerIcon* эта часть разметки будет присутствовать вседа */}
        <SideNav />
      </div>
      {/* принимаемый в качестве пропса узел реакта размещается в коробочке тут (справа, как main) причём он реагирует на изменение строки. тут будет производиться перерисовка по нажатию*/}
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}