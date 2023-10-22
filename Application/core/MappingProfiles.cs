using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        // constructor
        public MappingProfiles()
        {
            CreateMap<Activity, Activity>();
        }

    }
}