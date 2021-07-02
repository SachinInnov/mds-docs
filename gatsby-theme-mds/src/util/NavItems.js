import { useStaticQuery, graphql } from 'gatsby';

export function useNavItems() {
  const {
    allNavYaml: { nodes },
  } = useStaticQuery(graphql`
    query LEFT_NAV_QUERY($base: [String]) {
      allNavYaml(filter: {base: {in: $base}}) {
          nodes {
            
            menus {
              label
              link
              subMenu {
                label
                link
              }
            }
          }
        }
    }
  `);


  const navItems = nodes[0].menus.map((node) => {

    const menu = { ...node, name: node.label, icon: 'arrow_right_alt' };

    if (menu.subMenu) {
      menu.subMenu = menu.subMenu.map(item => {
        return {
          ...item,
          name: `${menu.name}.${item.label}`
        }
      })
    }

    return menu;
  }
  );
  return navItems;
}
