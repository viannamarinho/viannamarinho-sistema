const FontSizes = {
  xxxxs: '0.688rem',
  xxxs: '0.75rem',
  xxs: '0.813rem',
  xs: '0.875rem',
  small: '0.938rem',

  regular: '1rem',

  large: '1.125rem',
  xl: '1.25rem',
  xxl: '1.375rem',
  xxxl: '1.5rem',

  h1: '36px',
  h2: '17px',
  h3: '1.625rem'

  /*
  
    xsss    => 12px
    xss     => 13px
    xs      => 14px
    small   => 15px
    
    regular => 16px

    large   => 18px
    xl      => 20px
    xxl     => 22px
    xxxl    => 24px

    h1      => 50px
    h2      => 34px
    h3      => 26px
  
  */
}

const Fonts = {
  global: {
    sectionLabel: FontSizes.small,
    listItem: FontSizes.xxs,
    listItemSvg: FontSizes.regular
  },

  header: {
    logo: FontSizes.large,
    navMenu: FontSizes.xs,
    menu: FontSizes.xs
  },

  hero: {
    title: FontSizes.h1,
    subtitle: FontSizes.h2,
    button: FontSizes.xs,
    buttonSvg: FontSizes.large,
    avatarName: FontSizes.xs,
    avatarNameSvg: FontSizes.xs,
    avatarSkin: FontSizes.xxs
  },

  aboutMe: {
    resume: FontSizes.xs,
    name: FontSizes.regular,
    office: FontSizes.xxs,
    age: FontSizes.xs,
    ageSvg: FontSizes.regular,
    contact: FontSizes.xxs,
    link: FontSizes.small,
    linkSvg: FontSizes.large
  },

  mySkills: {
    menu: FontSizes.xxxxs,
    selectedSkill: FontSizes.small,
    label: FontSizes.small
  },

  portfolio: {
    alertSvg: FontSizes.large,
    alertArrowSvg: FontSizes.xxxl,
    buttonImage: FontSizes.xxxs,
    buttonSvg: FontSizes.regular,
    projectTitle: FontSizes.small,
    detailsTitle: FontSizes.regular,
    detailsDescription: FontSizes.xxxs,
    detailsSvg: FontSizes.xxxxs,
    detailsTechSvg: FontSizes.xxxs
  },

  thanks: {
    title: FontSizes.h3,
    subtitle: FontSizes.xxs,
    buttonSvg: FontSizes.large
  }
}

export default Fonts
