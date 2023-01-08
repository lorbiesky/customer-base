using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CustomerSistem.Migrations
{
    public partial class InitDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Address",
                table: "Customers",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "Customers",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "OwnHome",
                table: "Customers",
                type: "boolean",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "StateUf",
                table: "Customers",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Address",
                table: "Customers");

            migrationBuilder.DropColumn(
                name: "City",
                table: "Customers");

            migrationBuilder.DropColumn(
                name: "OwnHome",
                table: "Customers");

            migrationBuilder.DropColumn(
                name: "StateUf",
                table: "Customers");
        }
    }
}
