(()=>{const o=document.querySelector("button"),i=document.querySelector(".user-input");let n;async function t(){return response=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=80f5580617a24725a91193618241401&q=${n}`,{mode:"cors"}),answer=await response.json(),answer}async function e(o){n=i.value;const t=await o(),e=t.forecast.forecastday[0];return{location:t.location.name,firstHour:{temp:e.hour[7].temp_c,windspeed:e.hour[7].wind_kph,humidity:e.hour[7].humidity,condition_icon:e.hour[7].condition.icon},secondHour:{temp:e.hour[12].temp_c,windspeed:e.hour[12].wind_kph,humidity:e.hour[12].humidity,condition_icon:e.hour[12].condition.icon},thirdHour:{temp:e.hour[19].temp_c,windspeed:e.hour[19].wind_kph,humidity:e.hour[19].humidity,condition_icon:e.hour[19].condition.icon},fourthHour:{temp:e.hour[21].temp_c,windspeed:e.hour[21].wind_kph,humidity:e.hour[21].humidity,condition_icon:e.hour[21].condition.icon},averageTemp:e.day.avgtemp_c,averageHumidity:e.day.avghumidity,maxWind:e.day.maxwind_kph}}o.addEventListener("click",(()=>{const o=i.value;console.log(o),o&&(async()=>{const o=await e(t);console.log(o)})()}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiTUFBQSxNQUFNQSxFQUFlQyxTQUFTQyxjQUFjLFVBQ3RDQyxFQUFtQkYsU0FBU0MsY0FBYyxlQUNoRCxJQUFJRSxFQUNKQyxlQUFlQyxJQVdiLE9BUEFDLGVBQWlCQyxNQUNkLG9GQUF5REosSUFDMUQsQ0FDRUssS0FBTSxTQUdWQyxhQUFlSCxTQUFTSSxPQUNqQkQsTUFDVCxDQUNBTCxlQUFlTyxFQUFlQyxHQUM1QlQsRUFBWUQsRUFBaUJXLE1BQzdCLE1BQU1DLFFBQW1CRixJQUNuQkcsRUFBYUQsRUFBV0UsU0FBU0MsWUFBWSxHQWdDbkQsTUEvQmtCLENBQ2hCQyxTQUFVSixFQUFXSSxTQUFTQyxLQUM5QkMsVUFBVyxDQUNUQyxLQUFNTixFQUFXTyxLQUFLLEdBQUdDLE9BQ3pCQyxVQUFXVCxFQUFXTyxLQUFLLEdBQUdHLFNBQzlCQyxTQUFVWCxFQUFXTyxLQUFLLEdBQUdJLFNBQzdCQyxlQUFnQlosRUFBV08sS0FBSyxHQUFHTSxVQUFVQyxNQUUvQ0MsV0FBWSxDQUNWVCxLQUFNTixFQUFXTyxLQUFLLElBQUlDLE9BQzFCQyxVQUFXVCxFQUFXTyxLQUFLLElBQUlHLFNBQy9CQyxTQUFVWCxFQUFXTyxLQUFLLElBQUlJLFNBQzlCQyxlQUFnQlosRUFBV08sS0FBSyxJQUFJTSxVQUFVQyxNQUVoREUsVUFBVyxDQUNUVixLQUFNTixFQUFXTyxLQUFLLElBQUlDLE9BQzFCQyxVQUFXVCxFQUFXTyxLQUFLLElBQUlHLFNBQy9CQyxTQUFVWCxFQUFXTyxLQUFLLElBQUlJLFNBQzlCQyxlQUFnQlosRUFBV08sS0FBSyxJQUFJTSxVQUFVQyxNQUVoREcsV0FBWSxDQUNWWCxLQUFNTixFQUFXTyxLQUFLLElBQUlDLE9BQzFCQyxVQUFXVCxFQUFXTyxLQUFLLElBQUlHLFNBQy9CQyxTQUFVWCxFQUFXTyxLQUFLLElBQUlJLFNBQzlCQyxlQUFnQlosRUFBV08sS0FBSyxJQUFJTSxVQUFVQyxNQUVoREksWUFBYWxCLEVBQVdtQixJQUFJQyxVQUM1QkMsZ0JBQWlCckIsRUFBV21CLElBQUlHLFlBQ2hDQyxRQUFTdkIsRUFBV21CLElBQUlLLFlBSTVCLENBQ0F4QyxFQUFheUMsaUJBQWlCLFNBQVMsS0FDckMsTUFBTXJDLEVBQVlELEVBQWlCVyxNQUNuQzRCLFFBQVFDLElBQUl2QyxHQUNQQSxHQUdILFdBQ0UsTUFBTXdDLFFBQWVoQyxFQUFlTixHQUNwQ29DLFFBQVFDLElBQUlDLEVBQ2IsRUFIRCxFQUlGLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xuY29uc3QgdXNlcklucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlci1pbnB1dFwiKTtcbmxldCB1c2VySW5wdXQ7XG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKCkge1xuICBjb25zdCBhcGlLZXlQYXJhbWV0ZXIgPSBcIj9rZXk9ODBmNTU4MDYxN2EyNDcyNWE5MTE5MzYxODI0MTQwMVwiO1xuICBjb25zdCByZXF1ZXN0VVJMID0gXCJodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxXCI7XG4gIGNvbnN0IGZvcmVjYXN0V2VhdGhlclVSTCA9IFwiL2ZvcmVjYXN0Lmpzb25cIjtcbiAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgJHtyZXF1ZXN0VVJMICsgZm9yZWNhc3RXZWF0aGVyVVJMICsgYXBpS2V5UGFyYW1ldGVyfSZxPSR7dXNlcklucHV0fWAsXG4gICAge1xuICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgfVxuICApO1xuICBhbnN3ZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBhbnN3ZXI7XG59XG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzV2VhdGhlcihqc29uT2JqZWN0KSB7XG4gIHVzZXJJbnB1dCA9IHVzZXJJbnB1dEVsZW1lbnQudmFsdWU7XG4gIGNvbnN0IG1haW5PYmplY3QgPSBhd2FpdCBqc29uT2JqZWN0KCk7XG4gIGNvbnN0IGN1cnJlbnREYXkgPSBtYWluT2JqZWN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdO1xuICBjb25zdCBkYXlPYmplY3QgPSB7XG4gICAgbG9jYXRpb246IG1haW5PYmplY3QubG9jYXRpb24ubmFtZSxcbiAgICBmaXJzdEhvdXI6IHtcbiAgICAgIHRlbXA6IGN1cnJlbnREYXkuaG91cls3XS50ZW1wX2MsXG4gICAgICB3aW5kc3BlZWQ6IGN1cnJlbnREYXkuaG91cls3XS53aW5kX2twaCxcbiAgICAgIGh1bWlkaXR5OiBjdXJyZW50RGF5LmhvdXJbN10uaHVtaWRpdHksXG4gICAgICBjb25kaXRpb25faWNvbjogY3VycmVudERheS5ob3VyWzddLmNvbmRpdGlvbi5pY29uLFxuICAgIH0sXG4gICAgc2Vjb25kSG91cjoge1xuICAgICAgdGVtcDogY3VycmVudERheS5ob3VyWzEyXS50ZW1wX2MsXG4gICAgICB3aW5kc3BlZWQ6IGN1cnJlbnREYXkuaG91clsxMl0ud2luZF9rcGgsXG4gICAgICBodW1pZGl0eTogY3VycmVudERheS5ob3VyWzEyXS5odW1pZGl0eSxcbiAgICAgIGNvbmRpdGlvbl9pY29uOiBjdXJyZW50RGF5LmhvdXJbMTJdLmNvbmRpdGlvbi5pY29uLFxuICAgIH0sXG4gICAgdGhpcmRIb3VyOiB7XG4gICAgICB0ZW1wOiBjdXJyZW50RGF5LmhvdXJbMTldLnRlbXBfYyxcbiAgICAgIHdpbmRzcGVlZDogY3VycmVudERheS5ob3VyWzE5XS53aW5kX2twaCxcbiAgICAgIGh1bWlkaXR5OiBjdXJyZW50RGF5LmhvdXJbMTldLmh1bWlkaXR5LFxuICAgICAgY29uZGl0aW9uX2ljb246IGN1cnJlbnREYXkuaG91clsxOV0uY29uZGl0aW9uLmljb24sXG4gICAgfSxcbiAgICBmb3VydGhIb3VyOiB7XG4gICAgICB0ZW1wOiBjdXJyZW50RGF5LmhvdXJbMjFdLnRlbXBfYyxcbiAgICAgIHdpbmRzcGVlZDogY3VycmVudERheS5ob3VyWzIxXS53aW5kX2twaCxcbiAgICAgIGh1bWlkaXR5OiBjdXJyZW50RGF5LmhvdXJbMjFdLmh1bWlkaXR5LFxuICAgICAgY29uZGl0aW9uX2ljb246IGN1cnJlbnREYXkuaG91clsyMV0uY29uZGl0aW9uLmljb24sXG4gICAgfSxcbiAgICBhdmVyYWdlVGVtcDogY3VycmVudERheS5kYXkuYXZndGVtcF9jLFxuICAgIGF2ZXJhZ2VIdW1pZGl0eTogY3VycmVudERheS5kYXkuYXZnaHVtaWRpdHksXG4gICAgbWF4V2luZDogY3VycmVudERheS5kYXkubWF4d2luZF9rcGgsXG4gIH07XG5cbiAgcmV0dXJuIGRheU9iamVjdDtcbn1cbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCB1c2VySW5wdXQgPSB1c2VySW5wdXRFbGVtZW50LnZhbHVlO1xuICBjb25zb2xlLmxvZyh1c2VySW5wdXQpO1xuICBpZiAoIXVzZXJJbnB1dCkge1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJvY2Vzc1dlYXRoZXIoZ2V0V2VhdGhlcik7XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIH0pKCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbInNlYXJjaEJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInVzZXJJbnB1dEVsZW1lbnQiLCJ1c2VySW5wdXQiLCJhc3luYyIsImdldFdlYXRoZXIiLCJyZXNwb25zZSIsImZldGNoIiwibW9kZSIsImFuc3dlciIsImpzb24iLCJwcm9jZXNzV2VhdGhlciIsImpzb25PYmplY3QiLCJ2YWx1ZSIsIm1haW5PYmplY3QiLCJjdXJyZW50RGF5IiwiZm9yZWNhc3QiLCJmb3JlY2FzdGRheSIsImxvY2F0aW9uIiwibmFtZSIsImZpcnN0SG91ciIsInRlbXAiLCJob3VyIiwidGVtcF9jIiwid2luZHNwZWVkIiwid2luZF9rcGgiLCJodW1pZGl0eSIsImNvbmRpdGlvbl9pY29uIiwiY29uZGl0aW9uIiwiaWNvbiIsInNlY29uZEhvdXIiLCJ0aGlyZEhvdXIiLCJmb3VydGhIb3VyIiwiYXZlcmFnZVRlbXAiLCJkYXkiLCJhdmd0ZW1wX2MiLCJhdmVyYWdlSHVtaWRpdHkiLCJhdmdodW1pZGl0eSIsIm1heFdpbmQiLCJtYXh3aW5kX2twaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwicmVzdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==