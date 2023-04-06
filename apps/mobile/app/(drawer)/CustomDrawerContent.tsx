import { DrawerContentScrollView, DrawerContentComponentProps } from '@react-navigation/drawer';

import CredentialSvg from '../assets/credential.svg';
import DrawerItem from '../components/DrawerItem';

export default function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        href="credential"
        icon={CredentialSvg}
        title="Minha credencial"
        subtitle="Seu perfil, redes sociais e acesso"
        {...props}
      />
    </DrawerContentScrollView>
  );
}