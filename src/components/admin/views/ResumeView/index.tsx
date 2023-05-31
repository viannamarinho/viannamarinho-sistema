import styles from './styles.module.scss'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js'
import { Bar, Pie } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

const pieChartDataOptions = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2
    }
  },
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const
    },
    title: {
      display: false
    }
  }
}

const lineChartDataOptions = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2
    }
  },
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false
    }
  }
}

const lineChartData = {
  labels: [
    'TOTAL',
    'Trabalhista – Classe I',
    'Quirografário – Classe III',
    'Microempresa – Classe IV',
    'Garantia Real – Classe II'
  ],
  datasets: [
    {
      label: '# Credores',
      data: [2475, 453, 1847, 71, 104],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)'
    }
  ]
}

const pieChartData = {
  labels: ['Divergência', 'Habilitação'],
  datasets: [
    {
      label: '# Registros',
      data: [662, 1813],
      backgroundColor: [
        // 'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        // 'rgba(255, 206, 86, 0.2)',
        // 'rgba(75, 192, 192, 0.2)',
        // 'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        // 'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        // 'rgba(255, 206, 86, 1)',
        // 'rgba(75, 192, 192, 1)',
        // 'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }
  ]
}

export default function ResumeView() {
  return (
    <div className={styles.admin_view__resume}>
      <div className={styles.admin_view__resume__archive}>
        <span>
          <p>Último arquivo recebido: </p>
          <b>1.10 Fase Adm - RJ 2 - Grupo Oi.xlsx</b>
        </span>
        <span>
          <p>Data do recebimento do último arquivo: </p>
          <b>29/05/2023</b>
        </span>
      </div>
      <div className={styles.admin_view__resume__values}>
        <span>
          <p>Habilitações e divergências recebidas no site do AJ</p>
          <b>2.475</b>
        </span>
        <span>
          <p>Total de registros da base VMA</p>
          <b>43.740</b>
        </span>
        <span>
          <p>Total de registros da base OI</p>
          <b>100.000</b>
        </span>
      </div>
      <div className={styles.admin_view__resume__charts}>
        <div className={styles.admin_view__resume__chart_container}>
          <div className={styles.admin_view__resume__chart_label}>
            Classes de Credores
          </div>
          <Bar options={lineChartDataOptions} data={lineChartData} />
        </div>
        <div className={styles.admin_view__resume__chart_container}>
          <div className={styles.admin_view__resume__chart_label}>
            Habilitação X Divergência
          </div>
          <Pie options={pieChartDataOptions} data={pieChartData} />
        </div>
      </div>
    </div>
  )
}
