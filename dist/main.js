(()=>{const o=document.querySelector("button"),e=document.querySelector(".user-input");let n;async function t(){return response=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=80f5580617a24725a91193618241401&q=${n}`,{mode:"cors"}),answer=await response.json(),answer}o.addEventListener("click",(()=>{e.value&&(async()=>{const o=await async function(o){n=e.value;const t=await o(),i=t.forecast.forecastday[0];return console.log(i.day.condition.icon),{location:t.location.name,averageTemp:i.day.avgtemp_c,averageHumidity:i.day.avghumidity,maxWind:i.day.maxwind_kph,condition:i.day.condition.icon,firstHour:{temp:i.hour[7].temp_c,windspeed:i.hour[7].wind_kph,humidity:i.hour[7].humidity,condition_icon:i.hour[7].condition.icon},secondHour:{temp:i.hour[12].temp_c,windspeed:i.hour[12].wind_kph,humidity:i.hour[12].humidity,condition_icon:i.hour[12].condition.icon},thirdHour:{temp:i.hour[19].temp_c,windspeed:i.hour[19].wind_kph,humidity:i.hour[19].humidity,condition_icon:i.hour[19].condition.icon},fourthHour:{temp:i.hour[21].temp_c,windspeed:i.hour[21].wind_kph,humidity:i.hour[21].humidity,condition_icon:i.hour[21].condition.icon}}}(t);console.log(o),function(){const e=document.querySelector(".city-name"),n=document.querySelector(".icon"),t=document.querySelector(".average-wind"),i=document.querySelector(".average-temp"),r=document.querySelector(".average-humid"),c=document.querySelector(".first-hour-icon"),u=document.querySelector(".first-hour-temp"),d=document.querySelector(".second-hour-icon"),a=document.querySelector(".second-hour-temp"),m=document.querySelector(".third-hour-icon"),h=document.querySelector(".third-hour-temp"),s=document.querySelector(".fourth-hour-icon"),y=document.querySelector(".fourth-hour-temp");console.log(o.condition),e.innerText=`${o.location}`,n.src=`${o.condition}`,t.innerText=`🍃: ${o.maxWind} KPH`,i.innerText=`🌡️: ${o.averageTemp} °C`,r.innerText=`💧 :${o.averageHumidity} %`,c.src=`${o.firstHour.condition_icon}`,u.innerText=`${o.firstHour.temp} °C`,d.src=`${o.secondHour.condition_icon}`,a.innerText=`${o.secondHour.temp} °C`,m.src=`${o.thirdHour.condition_icon}`,h.innerText=`${o.thirdHour.temp} °C`,s.src=`${o.fourthHour.condition_icon}`,y.innerText=`${o.fourthHour.temp} °C`}()})()}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRTdDLEVBQU8yQixXQUFXRCxpQkFDMUNhLEVBQWVLLFVBQWEsR0FBRTVDLEVBQU8yQixXQUFXUCxVQUNoRG9CLEVBQWNLLElBQU8sR0FBRTdDLEVBQU80QixVQUFVRixpQkFDeENlLEVBQWNHLFVBQWEsR0FBRTVDLEVBQU80QixVQUFVUixVQUM5Q3NCLEVBQWVHLElBQU8sR0FBRTdDLEVBQU82QixXQUFXSCxpQkFDMUNpQixFQUFlQyxVQUFhLEdBQUU1QyxFQUFPNkIsV0FBV1QsU0FDbEQsQ0E3QkEwQixFQThCRCxFQWpDRCxFQWtDRixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcbmNvbnN0IHVzZXJJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXItaW5wdXRcIik7XG5jb25zdCBhcGlLZXlQYXJhbWV0ZXIgPSBcIj9rZXk9ODBmNTU4MDYxN2EyNDcyNWE5MTE5MzYxODI0MTQwMVwiO1xuY29uc3QgcmVxdWVzdFVSTCA9IFwiaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MVwiO1xuY29uc3QgZm9yZWNhc3RXZWF0aGVyVVJMID0gXCIvZm9yZWNhc3QuanNvblwiO1xubGV0IHVzZXJJbnB1dDtcbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoKSB7XG4gIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYCR7cmVxdWVzdFVSTCArIGZvcmVjYXN0V2VhdGhlclVSTCArIGFwaUtleVBhcmFtZXRlcn0mcT0ke3VzZXJJbnB1dH1gLFxuICAgIHtcbiAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgIH1cbiAgKTtcbiAgYW5zd2VyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gYW5zd2VyO1xufVxuYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc1dlYXRoZXIoanNvbk9iamVjdCkge1xuICB1c2VySW5wdXQgPSB1c2VySW5wdXRFbGVtZW50LnZhbHVlO1xuICBjb25zdCBtYWluT2JqZWN0ID0gYXdhaXQganNvbk9iamVjdCgpO1xuICBjb25zdCBjdXJyZW50RGF5ID0gbWFpbk9iamVjdC5mb3JlY2FzdC5mb3JlY2FzdGRheVswXTtcbiAgY29uc29sZS5sb2coY3VycmVudERheS5kYXkuY29uZGl0aW9uLmljb24pO1xuICBjb25zdCBkYXlPYmplY3QgPSB7XG4gICAgbG9jYXRpb246IG1haW5PYmplY3QubG9jYXRpb24ubmFtZSxcbiAgICBhdmVyYWdlVGVtcDogY3VycmVudERheS5kYXkuYXZndGVtcF9jLFxuICAgIGF2ZXJhZ2VIdW1pZGl0eTogY3VycmVudERheS5kYXkuYXZnaHVtaWRpdHksXG4gICAgbWF4V2luZDogY3VycmVudERheS5kYXkubWF4d2luZF9rcGgsXG4gICAgY29uZGl0aW9uOiBjdXJyZW50RGF5LmRheS5jb25kaXRpb24uaWNvbixcbiAgICBmaXJzdEhvdXI6IHtcbiAgICAgIHRlbXA6IGN1cnJlbnREYXkuaG91cls3XS50ZW1wX2MsXG4gICAgICB3aW5kc3BlZWQ6IGN1cnJlbnREYXkuaG91cls3XS53aW5kX2twaCxcbiAgICAgIGh1bWlkaXR5OiBjdXJyZW50RGF5LmhvdXJbN10uaHVtaWRpdHksXG4gICAgICBjb25kaXRpb25faWNvbjogY3VycmVudERheS5ob3VyWzddLmNvbmRpdGlvbi5pY29uLFxuICAgIH0sXG4gICAgc2Vjb25kSG91cjoge1xuICAgICAgdGVtcDogY3VycmVudERheS5ob3VyWzEyXS50ZW1wX2MsXG4gICAgICB3aW5kc3BlZWQ6IGN1cnJlbnREYXkuaG91clsxMl0ud2luZF9rcGgsXG4gICAgICBodW1pZGl0eTogY3VycmVudERheS5ob3VyWzEyXS5odW1pZGl0eSxcbiAgICAgIGNvbmRpdGlvbl9pY29uOiBjdXJyZW50RGF5LmhvdXJbMTJdLmNvbmRpdGlvbi5pY29uLFxuICAgIH0sXG4gICAgdGhpcmRIb3VyOiB7XG4gICAgICB0ZW1wOiBjdXJyZW50RGF5LmhvdXJbMTldLnRlbXBfYyxcbiAgICAgIHdpbmRzcGVlZDogY3VycmVudERheS5ob3VyWzE5XS53aW5kX2twaCxcbiAgICAgIGh1bWlkaXR5OiBjdXJyZW50RGF5LmhvdXJbMTldLmh1bWlkaXR5LFxuICAgICAgY29uZGl0aW9uX2ljb246IGN1cnJlbnREYXkuaG91clsxOV0uY29uZGl0aW9uLmljb24sXG4gICAgfSxcbiAgICBmb3VydGhIb3VyOiB7XG4gICAgICB0ZW1wOiBjdXJyZW50RGF5LmhvdXJbMjFdLnRlbXBfYyxcbiAgICAgIHdpbmRzcGVlZDogY3VycmVudERheS5ob3VyWzIxXS53aW5kX2twaCxcbiAgICAgIGh1bWlkaXR5OiBjdXJyZW50RGF5LmhvdXJbMjFdLmh1bWlkaXR5LFxuICAgICAgY29uZGl0aW9uX2ljb246IGN1cnJlbnREYXkuaG91clsyMV0uY29uZGl0aW9uLmljb24sXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gZGF5T2JqZWN0O1xufVxuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IHVzZXJJbnB1dCA9IHVzZXJJbnB1dEVsZW1lbnQudmFsdWU7XG5cbiAgaWYgKCF1c2VySW5wdXQpIHtcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByb2Nlc3NXZWF0aGVyKGdldFdlYXRoZXIpO1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgIHJlbmRlcldlYXRoZXIoKTtcbiAgICAgIGZ1bmN0aW9uIHJlbmRlcldlYXRoZXIoKSB7XG4gICAgICAgIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5LW5hbWVcIik7XG4gICAgICAgIGNvbnN0IGF2ZXJhZ2VJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pY29uXCIpO1xuICAgICAgICBjb25zdCBhdmVyYWdlV2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXZlcmFnZS13aW5kXCIpO1xuICAgICAgICBjb25zdCBhdmVyYWdlVGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF2ZXJhZ2UtdGVtcFwiKTtcbiAgICAgICAgY29uc3QgYXZlcmFnZUh1bWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdmVyYWdlLWh1bWlkXCIpO1xuICAgICAgICBjb25zdCBmaXJzdEhvdXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maXJzdC1ob3VyLWljb25cIik7XG4gICAgICAgIGNvbnN0IGZpcnN0SG91clRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpcnN0LWhvdXItdGVtcFwiKTtcbiAgICAgICAgY29uc3Qgc2Vjb25kSG91ckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlY29uZC1ob3VyLWljb25cIik7XG4gICAgICAgIGNvbnN0IHNlY29uZEhvdXJUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWNvbmQtaG91ci10ZW1wXCIpO1xuICAgICAgICBjb25zdCB0aGlyZEhvdXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aGlyZC1ob3VyLWljb25cIik7XG4gICAgICAgIGNvbnN0IHRoaXJkSG91clRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRoaXJkLWhvdXItdGVtcFwiKTtcbiAgICAgICAgY29uc3QgZm91cnRoSG91ckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvdXJ0aC1ob3VyLWljb25cIik7XG4gICAgICAgIGNvbnN0IGZvdXJ0aEhvdXJUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3VydGgtaG91ci10ZW1wXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuY29uZGl0aW9uKTtcbiAgICAgICAgY2l0eU5hbWUuaW5uZXJUZXh0ID0gYCR7cmVzdWx0LmxvY2F0aW9ufWA7XG4gICAgICAgIGF2ZXJhZ2VJY29uLnNyYyA9IGAke3Jlc3VsdC5jb25kaXRpb259YDtcbiAgICAgICAgYXZlcmFnZVdpbmQuaW5uZXJUZXh0ID0gYPCfjYM6ICR7cmVzdWx0Lm1heFdpbmR9IEtQSGA7XG4gICAgICAgIGF2ZXJhZ2VUZW1wZXJhdHVyZS5pbm5lclRleHQgPSBg8J+Moe+4jzogJHtyZXN1bHQuYXZlcmFnZVRlbXB9IMKwQ2A7XG4gICAgICAgIGF2ZXJhZ2VIdW1pZC5pbm5lclRleHQgPSBg8J+SpyA6JHtyZXN1bHQuYXZlcmFnZUh1bWlkaXR5fSAlYDtcbiAgICAgICAgZmlyc3RIb3VySWNvbi5zcmMgPSBgJHtyZXN1bHQuZmlyc3RIb3VyLmNvbmRpdGlvbl9pY29ufWA7XG4gICAgICAgIGZpcnN0SG91clRlbXAuaW5uZXJUZXh0ID0gYCR7cmVzdWx0LmZpcnN0SG91ci50ZW1wfSDCsENgO1xuICAgICAgICBzZWNvbmRIb3VySWNvbi5zcmMgPSBgJHtyZXN1bHQuc2Vjb25kSG91ci5jb25kaXRpb25faWNvbn1gO1xuICAgICAgICBzZWNvbmRIb3VyVGVtcC5pbm5lclRleHQgPSBgJHtyZXN1bHQuc2Vjb25kSG91ci50ZW1wfSDCsENgO1xuICAgICAgICB0aGlyZEhvdXJJY29uLnNyYyA9IGAke3Jlc3VsdC50aGlyZEhvdXIuY29uZGl0aW9uX2ljb259YDtcbiAgICAgICAgdGhpcmRIb3VyVGVtcC5pbm5lclRleHQgPSBgJHtyZXN1bHQudGhpcmRIb3VyLnRlbXB9IMKwQ2A7XG4gICAgICAgIGZvdXJ0aEhvdXJJY29uLnNyYyA9IGAke3Jlc3VsdC5mb3VydGhIb3VyLmNvbmRpdGlvbl9pY29ufWA7XG4gICAgICAgIGZvdXJ0aEhvdXJUZW1wLmlubmVyVGV4dCA9IGAke3Jlc3VsdC5mb3VydGhIb3VyLnRlbXB9IMKwQ2A7XG4gICAgICB9XG4gICAgfSkoKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsic2VhcmNoQnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidXNlcklucHV0RWxlbWVudCIsInVzZXJJbnB1dCIsImFzeW5jIiwiZ2V0V2VhdGhlciIsInJlc3BvbnNlIiwiZmV0Y2giLCJtb2RlIiwiYW5zd2VyIiwianNvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2YWx1ZSIsInJlc3VsdCIsImpzb25PYmplY3QiLCJtYWluT2JqZWN0IiwiY3VycmVudERheSIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJjb25zb2xlIiwibG9nIiwiZGF5IiwiY29uZGl0aW9uIiwiaWNvbiIsImxvY2F0aW9uIiwibmFtZSIsImF2ZXJhZ2VUZW1wIiwiYXZndGVtcF9jIiwiYXZlcmFnZUh1bWlkaXR5IiwiYXZnaHVtaWRpdHkiLCJtYXhXaW5kIiwibWF4d2luZF9rcGgiLCJmaXJzdEhvdXIiLCJ0ZW1wIiwiaG91ciIsInRlbXBfYyIsIndpbmRzcGVlZCIsIndpbmRfa3BoIiwiaHVtaWRpdHkiLCJjb25kaXRpb25faWNvbiIsInNlY29uZEhvdXIiLCJ0aGlyZEhvdXIiLCJmb3VydGhIb3VyIiwicHJvY2Vzc1dlYXRoZXIiLCJjaXR5TmFtZSIsImF2ZXJhZ2VJY29uIiwiYXZlcmFnZVdpbmQiLCJhdmVyYWdlVGVtcGVyYXR1cmUiLCJhdmVyYWdlSHVtaWQiLCJmaXJzdEhvdXJJY29uIiwiZmlyc3RIb3VyVGVtcCIsInNlY29uZEhvdXJJY29uIiwic2Vjb25kSG91clRlbXAiLCJ0aGlyZEhvdXJJY29uIiwidGhpcmRIb3VyVGVtcCIsImZvdXJ0aEhvdXJJY29uIiwiZm91cnRoSG91clRlbXAiLCJpbm5lclRleHQiLCJzcmMiLCJyZW5kZXJXZWF0aGVyIl0sInNvdXJjZVJvb3QiOiIifQ==