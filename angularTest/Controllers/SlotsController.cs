using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using angularTest.Models;

namespace angularTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SlotsController : ControllerBase
    {
        private readonly test_asr2Context _context;

        public SlotsController(test_asr2Context context)
        {
            _context = context;
        }

        // GET: api/Slots
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Slot>>> GetSlot()
        {
            return await _context.Slot.ToListAsync();
        }

        // GET: api/Slots/{userId}
        [HttpGet]
        [Route("{userId}")]
        public async Task<ActionResult<IEnumerable<Slot>>> GetSlot(string userId)
        {
            if(userId.Length == 6)
            {
                return await _context.Slot.Select(s =>s).Where(m => m.StaffId == userId).ToListAsync();
            }
            else
            {
                return await _context.Slot.Select(s => s).Where(m => m.BookedInStudentId == userId).ToListAsync();
            }
        }



        // GET: api/Slots/Details/5
        [HttpGet]
        [Route("Details/{id}")]
        public async Task<ActionResult<Slot>> GetSlot(int id)
        {
            var slot = await _context.Slot.FindAsync(id);

            if (slot == null)
            {
                return NotFound();
            }

            return slot;
        }

        // PUT: api/Slots/Edit/5
        [HttpPut]
        [Route("Edit")]
        public async Task<IActionResult> EditSlot([FromBody] Slot slot)
        {
            

            _context.Entry(slot).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return NoContent();
        }

        // POST: api/Slots/Create
        [HttpPost]
        [Route("Create")]
        public async Task<ActionResult<Slot>> PostSlot(Slot slot)
        {
            _context.Slot.Add(slot);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSlot", new { id = slot.Id }, slot);
        }

        // DELETE: api/Slots/Delete/5
        [HttpDelete]
        [Route("Delete/{id}")]
        public async Task<ActionResult<Slot>> DeleteSlot(int id)
        {
            var slot = await _context.Slot.FindAsync(id);
            if (slot == null)
            {
                return NotFound();
            }

            _context.Slot.Remove(slot);
            await _context.SaveChangesAsync();

            return slot;
        }

        private bool SlotExists(int id)
        {
            return _context.Slot.Any(e => e.Id == id);
        }
    }
}
