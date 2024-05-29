import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChartConfiguration } from 'chart.js';
import { OnLeaveModalComponent } from './on-leave-modal/on-leave-modal.component';
import { AbsentTodayComponent } from './absent-today/absent-today.component';
import { WorkAnniversaryComponent } from './work-anniversary/work-anniversary.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public barChartLegend = true;
  public barChartPlugins = [];
  public modalOpen: boolean = false;

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],

    datasets: [
      {
        label: 'Before Break',
        backgroundColor: '#60b158',
        data: [5, 5.4, 4.5, 5, 5.12, 5, 5],
        borderRadius: 550,
      },
      {
        label: 'Break',
        backgroundColor: '#ffa700',
        data: [1, 1, 1, 1, 1, 1, 1],
      },
      {
        label: 'After Break',
        backgroundColor: '#60b158',
        data: [4, 4, 4, 4, 4, 4, 4],
      },
    ],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    scales: {
      x: {
        stacked: true, // Stack bars horizontally
      },
      y: {
        stacked: true, // Stack bars vertically
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = '';
            context.chart.data.datasets.forEach((dataset, i) => {
              const value = dataset.data[context.dataIndex];
              if (value !== undefined) {
                if (i === 0) {
                  label += `Initial in time: ${value}\n`;
                } else if (i === 1) {
                  label += `Final Out Time: ${value}\n`;
                } else if (i === 2) {
                  label += `After Break: ${value}\n`;
                }
              }
            });
            return label;
          },
        },
        displayColors: false, // Hide dataset colors
        borderColor: 'rgba(0, 0, 0, 0.5)', // Border color
        borderWidth: 1, // Border width
        padding: 10, // Padding
        cornerRadius: 5,
      },
    },
  };
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
      this.barChartData?.labels?.push(`${i}`);
    }
  }
  public showModal(): void {
    try {
      if (isPlatformBrowser(this.platformId)) {
        this.modalService
          .open(OnLeaveModalComponent, {
            ariaLabelledBy: 'modal',
            centered: false,
            windowClass: 'modal-right',
          })
          .result.then(
            (result: any) => {
              this.modalOpen = true;
              console.log(`Result ${result}`);
            },
            (reason: any) => {
              console.log('Dismissed', reason);
            }
          );
      }
    } catch (error) {
      console.error('Error showing modal:', error);
    }
  }
  showModalofAbsent(){
     try {
       if (isPlatformBrowser(this.platformId)) {
         this.modalService
           .open(AbsentTodayComponent, {
             ariaLabelledBy: 'modal',
             centered: false,
             windowClass: 'modal-right',
           })
           .result.then(
             (result: any) => {
               this.modalOpen = true;
               console.log(`Result ${result}`);
             },
             (reason: any) => {
               console.log('Dismissed', reason);
             }
           );
       }
     } catch (error) {
       console.error('Error showing modal:', error);
     }
  }
  showModalofWorkAnniversary(){
     try {
       if (isPlatformBrowser(this.platformId)) {
         this.modalService
           .open(WorkAnniversaryComponent, {
             ariaLabelledBy: 'modal',
             centered: false,
             windowClass: 'modal-right',
           })
           .result.then(
             (result: any) => {
               this.modalOpen = true;
               console.log(`Result ${result}`);
             },
             (reason: any) => {
               console.log('Dismissed', reason);
             }
           );
       }
     } catch (error) {
       console.error('Error showing modal:', error);
     }
  }
}
