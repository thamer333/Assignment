using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Globalization;
using System.Runtime.Serialization;

namespace Assignment.Models
{
    [DataContract]
    [Table("AssignmentTable")]
    public class AssignmentTable
    {
        [DataMember]
        public int Id { get; set; }

        [DataMember]
        public string FullName { get; set; }


        [DataMember]
        public AssignmentEnums.Gender Gender { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime Birthdate { get; set; }

        [DataMember(Name = "Birthdate")]
        private string BirthdateSerialized { get; set; }

        [DataMember]
        public int NumberOfKids { get; set; }
        [DataMember]
        public AssignmentEnums.HearAboutUs HearAboutUs { get; set; }

        [OnSerializing]
        void OnSerializing(StreamingContext context)
        {

            this.BirthdateSerialized = this.Birthdate.ToString(Constans.DateTimeFormat, CultureInfo.InvariantCulture);

        }

        [OnDeserialized]
        void OnDeserializing(StreamingContext context)
        {
            this.Birthdate = DateTime.ParseExact(this.BirthdateSerialized, Constans.DateTimeFormat, CultureInfo.InvariantCulture);

        }
    }
}
