import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import BusinessIcon from '@mui/icons-material/Business';
import GroupIcon from '@mui/icons-material/Group';
import PaymentsIcon from '@mui/icons-material/Payments';
import DiscountIcon from '@mui/icons-material/Discount';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';

export const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <SpaceDashboardIcon />
      },
      {
        title: "Empresa",
        path: "/dashboard/company",
        icon: <BusinessIcon />
      },
      {
        title: "Colaboradores",
        path: "/dashboard/collaborators",
        icon: <GroupIcon />
      },
      {
        title: "Payroll",
        path: "/dashboard/payroll",
        icon: <PaymentsIcon />
      },
      {
        title: "Benefits",
        path: "/dashboard/benefits",
        icon: <CreditScoreIcon />
      },
      {
        title: "Discounts",
        path: "/dashboard/discounts",
        icon: <DiscountIcon />
      }
    ]
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <SettingsIcon />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <InfoIcon />,
      },
    ],
  },
]