
using DatabaseStructure.Models;
using Microsoft.EntityFrameworkCore;

namespace DatabaseStructure
{
    public class DBContext : DbContext
    {
        public DbSet<SchoolType> SchoolTypes { get; set; }

        public DbSet<Course> Courses { get; set; }

        public DbSet<Professor> Professors { get; set; }

        public DbSet<School> Schools { get; set; }

        public DbSet<Student> Students { get; set; }

        public DbSet<User> Users { get; set; }

        public DbSet<Role> Roles { get; set; }

        public DbSet<StudentCourse> StudentCourses { get; set; }

        public DBContext(DbContextOptions<DBContext> options)
            : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<StudentCourse>()
                .HasKey(bc => new { bc.StudentId, bc.CourseId });
            modelBuilder.Entity<StudentCourse>()
                .HasOne(bc => bc.Student)
                .WithMany(b => b.StudentCourses)
                .HasForeignKey(bc => bc.StudentId);
            modelBuilder.Entity<StudentCourse>()
                .HasOne(bc => bc.Course)
                .WithMany(c => c.StudentCourses)
                .HasForeignKey(bc => bc.CourseId);

            modelBuilder.Entity<Course>()
            .HasIndex(c => c.Name)
            .IsUnique();

            modelBuilder.Entity<Professor>()
            .HasIndex(p => p.Email)
            .IsUnique();

            modelBuilder.Entity<Student>()
           .HasIndex(s => s.Email)
           .IsUnique();

            modelBuilder.Entity<School>()
           .HasIndex(s => s.Name)
           .IsUnique();
        }
    }
}