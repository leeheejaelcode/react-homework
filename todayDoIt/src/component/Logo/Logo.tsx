import logo_Stereo from '@/images/logo_stereo.svg';
import S from '@/component/Logo/Logo.module.css';

export function Logo({ _ref }) {
  return <img ref={_ref} className={S.logo} src={logo_Stereo} alt="Logo" />;
}
