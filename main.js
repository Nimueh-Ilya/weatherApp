(()=>{const e=document.querySelector("button"),o=document.querySelector(".user-input");let t;async function n(){return response=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=80f5580617a24725a91193618241401&q=${t}`,{mode:"cors"}),answer=await response.json(),answer}e.addEventListener("click",(()=>{o.value&&(async()=>{const e=await async function(e){t=o.value;const n=await e(),i=n.forecast.forecastday[0];return console.log(i.day.condition.icon),{location:n.location.name,averageTemp:i.day.avgtemp_c,averageHumidity:i.day.avghumidity,maxWind:i.day.maxwind_kph,condition:i.day.condition.icon,firstHour:{temp:i.hour[7].temp_c,windspeed:i.hour[7].wind_kph,humidity:i.hour[7].humidity,condition_icon:i.hour[7].condition.icon},secondHour:{temp:i.hour[12].temp_c,windspeed:i.hour[12].wind_kph,humidity:i.hour[12].humidity,condition_icon:i.hour[12].condition.icon},thirdHour:{temp:i.hour[19].temp_c,windspeed:i.hour[19].wind_kph,humidity:i.hour[19].humidity,condition_icon:i.hour[19].condition.icon},fourthHour:{temp:i.hour[21].temp_c,windspeed:i.hour[21].wind_kph,humidity:i.hour[21].humidity,condition_icon:i.hour[21].condition.icon}}}(n);console.log(e),function(){const o=document.querySelector(".city-name"),t=document.querySelector(".icon"),n=document.querySelector(".average-wind"),i=document.querySelector(".average-temp"),r=document.querySelector(".average-humid"),c=(document.querySelector(".first-hour-icon"),document.querySelector(".first-hour-temp")),u=(document.querySelector(".second-hour-icon"),document.querySelector(".second-hour-temp")),d=(document.querySelector(".third-hour-icon"),document.querySelector(".third-hour-temp")),a=(document.querySelector(".fourth-hour-icon"),document.querySelector(".fourth-hour-temp"));console.log(e.condition),o.innerText=`${e.location}`,t.src=`${e.condition}`,n.innerText=`${e.maxWind} KPH`,i.innerText=`${e.averageTemp} °C`,r.innerText=`${e.averageHumidity} %`,c.innerText=`${e.firstHour.temp} °C`,u.innerText=`${e.secondHour.temp} °C`,d.innerText=`${e.thirdHour.temp} °C`,a.innerText=`${e.fourthHour.temp} °C`}()})()}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsR0FBRXhDLEVBQU82QixXQUFXVCxTQUNsRCxDQTdCQXNCLEVBOEJELEVBakNELEVBa0NGLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xuY29uc3QgdXNlcklucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlci1pbnB1dFwiKTtcbmNvbnN0IGFwaUtleVBhcmFtZXRlciA9IFwiP2tleT04MGY1NTgwNjE3YTI0NzI1YTkxMTkzNjE4MjQxNDAxXCI7XG5jb25zdCByZXF1ZXN0VVJMID0gXCJodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxXCI7XG5jb25zdCBmb3JlY2FzdFdlYXRoZXJVUkwgPSBcIi9mb3JlY2FzdC5qc29uXCI7XG5sZXQgdXNlcklucHV0O1xuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcigpIHtcbiAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgJHtyZXF1ZXN0VVJMICsgZm9yZWNhc3RXZWF0aGVyVVJMICsgYXBpS2V5UGFyYW1ldGVyfSZxPSR7dXNlcklucHV0fWAsXG4gICAge1xuICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgfVxuICApO1xuICBhbnN3ZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBhbnN3ZXI7XG59XG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzV2VhdGhlcihqc29uT2JqZWN0KSB7XG4gIHVzZXJJbnB1dCA9IHVzZXJJbnB1dEVsZW1lbnQudmFsdWU7XG4gIGNvbnN0IG1haW5PYmplY3QgPSBhd2FpdCBqc29uT2JqZWN0KCk7XG4gIGNvbnN0IGN1cnJlbnREYXkgPSBtYWluT2JqZWN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdO1xuICBjb25zb2xlLmxvZyhjdXJyZW50RGF5LmRheS5jb25kaXRpb24uaWNvbik7XG4gIGNvbnN0IGRheU9iamVjdCA9IHtcbiAgICBsb2NhdGlvbjogbWFpbk9iamVjdC5sb2NhdGlvbi5uYW1lLFxuICAgIGF2ZXJhZ2VUZW1wOiBjdXJyZW50RGF5LmRheS5hdmd0ZW1wX2MsXG4gICAgYXZlcmFnZUh1bWlkaXR5OiBjdXJyZW50RGF5LmRheS5hdmdodW1pZGl0eSxcbiAgICBtYXhXaW5kOiBjdXJyZW50RGF5LmRheS5tYXh3aW5kX2twaCxcbiAgICBjb25kaXRpb246IGN1cnJlbnREYXkuZGF5LmNvbmRpdGlvbi5pY29uLFxuICAgIGZpcnN0SG91cjoge1xuICAgICAgdGVtcDogY3VycmVudERheS5ob3VyWzddLnRlbXBfYyxcbiAgICAgIHdpbmRzcGVlZDogY3VycmVudERheS5ob3VyWzddLndpbmRfa3BoLFxuICAgICAgaHVtaWRpdHk6IGN1cnJlbnREYXkuaG91cls3XS5odW1pZGl0eSxcbiAgICAgIGNvbmRpdGlvbl9pY29uOiBjdXJyZW50RGF5LmhvdXJbN10uY29uZGl0aW9uLmljb24sXG4gICAgfSxcbiAgICBzZWNvbmRIb3VyOiB7XG4gICAgICB0ZW1wOiBjdXJyZW50RGF5LmhvdXJbMTJdLnRlbXBfYyxcbiAgICAgIHdpbmRzcGVlZDogY3VycmVudERheS5ob3VyWzEyXS53aW5kX2twaCxcbiAgICAgIGh1bWlkaXR5OiBjdXJyZW50RGF5LmhvdXJbMTJdLmh1bWlkaXR5LFxuICAgICAgY29uZGl0aW9uX2ljb246IGN1cnJlbnREYXkuaG91clsxMl0uY29uZGl0aW9uLmljb24sXG4gICAgfSxcbiAgICB0aGlyZEhvdXI6IHtcbiAgICAgIHRlbXA6IGN1cnJlbnREYXkuaG91clsxOV0udGVtcF9jLFxuICAgICAgd2luZHNwZWVkOiBjdXJyZW50RGF5LmhvdXJbMTldLndpbmRfa3BoLFxuICAgICAgaHVtaWRpdHk6IGN1cnJlbnREYXkuaG91clsxOV0uaHVtaWRpdHksXG4gICAgICBjb25kaXRpb25faWNvbjogY3VycmVudERheS5ob3VyWzE5XS5jb25kaXRpb24uaWNvbixcbiAgICB9LFxuICAgIGZvdXJ0aEhvdXI6IHtcbiAgICAgIHRlbXA6IGN1cnJlbnREYXkuaG91clsyMV0udGVtcF9jLFxuICAgICAgd2luZHNwZWVkOiBjdXJyZW50RGF5LmhvdXJbMjFdLndpbmRfa3BoLFxuICAgICAgaHVtaWRpdHk6IGN1cnJlbnREYXkuaG91clsyMV0uaHVtaWRpdHksXG4gICAgICBjb25kaXRpb25faWNvbjogY3VycmVudERheS5ob3VyWzIxXS5jb25kaXRpb24uaWNvbixcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiBkYXlPYmplY3Q7XG59XG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgdXNlcklucHV0ID0gdXNlcklucHV0RWxlbWVudC52YWx1ZTtcblxuICBpZiAoIXVzZXJJbnB1dCkge1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJvY2Vzc1dlYXRoZXIoZ2V0V2VhdGhlcik7XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgcmVuZGVyV2VhdGhlcigpO1xuICAgICAgZnVuY3Rpb24gcmVuZGVyV2VhdGhlcigpIHtcbiAgICAgICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHktbmFtZVwiKTtcbiAgICAgICAgY29uc3QgYXZlcmFnZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmljb25cIik7XG4gICAgICAgIGNvbnN0IGF2ZXJhZ2VXaW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdmVyYWdlLXdpbmRcIik7XG4gICAgICAgIGNvbnN0IGF2ZXJhZ2VUZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXZlcmFnZS10ZW1wXCIpO1xuICAgICAgICBjb25zdCBhdmVyYWdlSHVtaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF2ZXJhZ2UtaHVtaWRcIik7XG4gICAgICAgIGNvbnN0IGZpcnN0SG91ckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpcnN0LWhvdXItaWNvblwiKTtcbiAgICAgICAgY29uc3QgZmlyc3RIb3VyVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlyc3QtaG91ci10ZW1wXCIpO1xuICAgICAgICBjb25zdCBzZWNvbmRIb3VySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2Vjb25kLWhvdXItaWNvblwiKTtcbiAgICAgICAgY29uc3Qgc2Vjb25kSG91clRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlY29uZC1ob3VyLXRlbXBcIik7XG4gICAgICAgIGNvbnN0IHRoaXJkSG91ckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRoaXJkLWhvdXItaWNvblwiKTtcbiAgICAgICAgY29uc3QgdGhpcmRIb3VyVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGhpcmQtaG91ci10ZW1wXCIpO1xuICAgICAgICBjb25zdCBmb3VydGhIb3VySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm91cnRoLWhvdXItaWNvblwiKTtcbiAgICAgICAgY29uc3QgZm91cnRoSG91clRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvdXJ0aC1ob3VyLXRlbXBcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5jb25kaXRpb24pO1xuICAgICAgICBjaXR5TmFtZS5pbm5lclRleHQgPSBgJHtyZXN1bHQubG9jYXRpb259YDtcbiAgICAgICAgYXZlcmFnZUljb24uc3JjID0gYCR7cmVzdWx0LmNvbmRpdGlvbn1gO1xuICAgICAgICBhdmVyYWdlV2luZC5pbm5lclRleHQgPSBgJHtyZXN1bHQubWF4V2luZH0gS1BIYDtcbiAgICAgICAgYXZlcmFnZVRlbXBlcmF0dXJlLmlubmVyVGV4dCA9IGAke3Jlc3VsdC5hdmVyYWdlVGVtcH0gwrBDYDtcbiAgICAgICAgYXZlcmFnZUh1bWlkLmlubmVyVGV4dCA9IGAke3Jlc3VsdC5hdmVyYWdlSHVtaWRpdHl9ICVgO1xuICAgICAgICAvLyBmaXJzdEhvdXJJY29uLmlubmVyVGV4dCA9IGAke3Jlc3VsdC59YDtcbiAgICAgICAgZmlyc3RIb3VyVGVtcC5pbm5lclRleHQgPSBgJHtyZXN1bHQuZmlyc3RIb3VyLnRlbXB9IMKwQ2A7XG4gICAgICAgIC8vIHNlY29uZEhvdXJJY29uLmlubmVyVGV4dCA9IGAke3Jlc3VsdC59YDtcbiAgICAgICAgc2Vjb25kSG91clRlbXAuaW5uZXJUZXh0ID0gYCR7cmVzdWx0LnNlY29uZEhvdXIudGVtcH0gwrBDYDtcbiAgICAgICAgLy8gdGhpcmRIb3VySWNvbi5pbm5lclRleHQgPSBgJHtyZXN1bHQufWA7XG4gICAgICAgIHRoaXJkSG91clRlbXAuaW5uZXJUZXh0ID0gYCR7cmVzdWx0LnRoaXJkSG91ci50ZW1wfSDCsENgO1xuICAgICAgICAvLyBmb3VydGhIb3VySWNvbi5pbm5lclRleHQgPSBgJHtyZXN1bHQufWA7XG4gICAgICAgIGZvdXJ0aEhvdXJUZW1wLmlubmVyVGV4dCA9IGAke3Jlc3VsdC5mb3VydGhIb3VyLnRlbXB9IMKwQ2A7XG4gICAgICB9XG4gICAgfSkoKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsic2VhcmNoQnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidXNlcklucHV0RWxlbWVudCIsInVzZXJJbnB1dCIsImFzeW5jIiwiZ2V0V2VhdGhlciIsInJlc3BvbnNlIiwiZmV0Y2giLCJtb2RlIiwiYW5zd2VyIiwianNvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2YWx1ZSIsInJlc3VsdCIsImpzb25PYmplY3QiLCJtYWluT2JqZWN0IiwiY3VycmVudERheSIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJjb25zb2xlIiwibG9nIiwiZGF5IiwiY29uZGl0aW9uIiwiaWNvbiIsImxvY2F0aW9uIiwibmFtZSIsImF2ZXJhZ2VUZW1wIiwiYXZndGVtcF9jIiwiYXZlcmFnZUh1bWlkaXR5IiwiYXZnaHVtaWRpdHkiLCJtYXhXaW5kIiwibWF4d2luZF9rcGgiLCJmaXJzdEhvdXIiLCJ0ZW1wIiwiaG91ciIsInRlbXBfYyIsIndpbmRzcGVlZCIsIndpbmRfa3BoIiwiaHVtaWRpdHkiLCJjb25kaXRpb25faWNvbiIsInNlY29uZEhvdXIiLCJ0aGlyZEhvdXIiLCJmb3VydGhIb3VyIiwicHJvY2Vzc1dlYXRoZXIiLCJjaXR5TmFtZSIsImF2ZXJhZ2VJY29uIiwiYXZlcmFnZVdpbmQiLCJhdmVyYWdlVGVtcGVyYXR1cmUiLCJhdmVyYWdlSHVtaWQiLCJmaXJzdEhvdXJUZW1wIiwic2Vjb25kSG91clRlbXAiLCJ0aGlyZEhvdXJUZW1wIiwiZm91cnRoSG91clRlbXAiLCJpbm5lclRleHQiLCJzcmMiLCJyZW5kZXJXZWF0aGVyIl0sInNvdXJjZVJvb3QiOiIifQ==